import React, { useEffect, useRef, useState } from 'react'
import { loadPDF, renderPage } from '../../utils/pdfLoader'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import { Icon } from '../Icon'

interface PDFViewerProps {
  pdfData: ArrayBuffer | null
  fileName?: string
  currentPage?: number
  scale?: number
  rotation?: number
  onPageChange?: (page: number, total: number) => void
  onScaleChange?: (scale: number) => void
  onZoomIn?: () => void
  onZoomOut?: () => void
  zoomLevel?: number
}

const PDFViewer: React.FC<PDFViewerProps> = ({
  pdfData,
  fileName,
  currentPage: externalCurrentPage,
  scale: externalScale,
  rotation = 0,
  onPageChange,
  onScaleChange,
  onZoomIn,
  onZoomOut,
  zoomLevel = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const renderTaskRef = useRef<{ cancel: () => void } | null>(null)
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [internalCurrentPage, setInternalCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [internalScale, setInternalScale] = useState(1.0) // Default 100% scale (normal size)

  // Use external props if provided, otherwise use internal state
  const currentPage = externalCurrentPage ?? internalCurrentPage
  const scale = externalScale ?? internalScale

  // Load PDF document when pdfData changes
  useEffect(() => {
    if (!pdfData) {
      setPdfDoc(null)
      setTotalPages(0)
      setInternalCurrentPage(1)
      return
    }

    const loadDocument = async () => {
      setLoading(true)
      setError(null)

      try {
        console.log('Loading PDF, data size:', pdfData.byteLength, 'bytes')
        const doc = await loadPDF(pdfData)
        console.log('PDF loaded successfully, pages:', doc.numPages)
        setPdfDoc(doc)
        const numPages = doc.numPages
        setTotalPages(numPages)
        setInternalCurrentPage(1)
        onPageChange?.(1, numPages)
      } catch (err) {
        console.error('Error loading PDF:', err)
        setError(`Failed to load PDF: ${err instanceof Error ? err.message : 'Unknown error'}`)
        setPdfDoc(null)
      } finally {
        setLoading(false)
      }
    }

    loadDocument()
  }, [pdfData, onPageChange])

  // Render page when PDF doc, current page, or scale changes
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current || currentPage < 1 || currentPage > totalPages) return

    let isMounted = true

    // Cancel any previous render task
    if (renderTaskRef.current) {
      try {
        renderTaskRef.current.cancel()
      } catch (e) {
        // Ignore errors when canceling
      }
      renderTaskRef.current = null
    }

    const renderCurrentPage = async () => {
      if (!isMounted) return
      
      try {
        setLoading(true)
        setError(null)
        const task = await renderPage(pdfDoc, currentPage, canvasRef.current!, scale, rotation)
        
        if (!isMounted) {
          task.cancel()
          return
        }
        
        renderTaskRef.current = task
        await task.promise
        
        if (!isMounted) return
        
        // Only call onPageChange once after successful render
        if (onPageChange && totalPages > 0) {
          onPageChange(currentPage, totalPages)
        }
        renderTaskRef.current = null
        setLoading(false)
      } catch (err: any) {
        if (!isMounted) return
        
        // Ignore cancellation errors
        if (err?.name === 'RenderingCancelledException' || err?.message?.includes('cancelled') || err?.message?.includes('cancel')) {
          return
        }
        console.error('Error rendering page:', err)
        setError('Failed to render page. Please try again.')
        renderTaskRef.current = null
        setLoading(false)
      }
    }

    renderCurrentPage()

    // Cleanup: cancel render on unmount or when dependencies change
    return () => {
      isMounted = false
      if (renderTaskRef.current) {
        try {
          renderTaskRef.current.cancel()
        } catch (e) {
          // Ignore errors
        }
        renderTaskRef.current = null
      }
    }
  }, [pdfDoc, currentPage, scale, rotation, totalPages]) // Removed onPageChange from deps

  // Update internal state when external props change
  useEffect(() => {
    if (externalCurrentPage !== undefined && externalCurrentPage !== internalCurrentPage) {
      setInternalCurrentPage(externalCurrentPage)
    }
  }, [externalCurrentPage, internalCurrentPage])

  useEffect(() => {
    if (externalScale !== undefined && externalScale !== internalScale) {
      setInternalScale(externalScale)
      // Don't call onScaleChange here to avoid loops - it's handled by parent
    }
  }, [externalScale, internalScale]) // Removed onScaleChange from deps

  if (loading && !pdfDoc) {
    return (
      <div className="flex-1 overflow-auto bg-background-light dark:bg-[#0f1115] relative p-2 md:p-4 lg:p-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading PDF...</p>
        </div>
      </div>
    )
  }

  if (error && !pdfDoc) {
    return (
      <div className="flex-1 overflow-auto bg-background-light dark:bg-[#0f1115] relative p-2 md:p-4 lg:p-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <Icon name="error" className="text-4xl text-red-500" />
          <p className="text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    )
  }

  if (!pdfDoc) {
    return (
      <div className="flex-1 overflow-auto bg-background-light dark:bg-[#0f1115] relative p-2 md:p-4 lg:p-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <Icon name="description" className="text-4xl text-slate-400" />
          <p className="text-slate-600 dark:text-slate-400">No PDF loaded. Upload a PDF to get started.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto bg-background-light dark:bg-[#0f1115] relative p-2 md:p-4 lg:p-8 flex justify-center">
      {loading && pdfDoc && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Rendering...</p>
          </div>
        </div>
      )}
      
      <div className="w-full max-w-full md:max-w-[600px] lg:max-w-[850px]">
        <canvas
          ref={canvasRef}
          className="w-full h-auto bg-white shadow-lg rounded-sm"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  )
}

export default PDFViewer
