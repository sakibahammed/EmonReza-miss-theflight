// Import pdfjs-dist with proper Vite handling
// @ts-ignore - pdfjs-dist types may not be perfect
import * as pdfjsLib from 'pdfjs-dist'
import type { PDFDocumentProxy } from 'pdfjs-dist'

// Set the worker source for PDF.js
// Using CDN for worker - in production, you may want to copy worker to public folder
if (typeof window !== 'undefined') {
  try {
    // Try to use the local worker file first
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
  } catch (e) {
    // Fallback to CDN
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
  }
}

export interface PDFDocument {
  numPages: number
  getPage: (pageNumber: number) => Promise<PDFPage>
}

export interface PDFPage {
  getViewport: (params: { scale: number }) => PDFViewport
  render: (params: PDFRenderParams) => { promise: Promise<void> }
}

export interface PDFViewport {
  width: number
  height: number
}

export interface PDFRenderParams {
  canvasContext: CanvasRenderingContext2D
  viewport: PDFViewport
}

/**
 * Load a PDF document from ArrayBuffer or File
 */
export const loadPDF = async (source: File | ArrayBuffer | Uint8Array): Promise<PDFDocumentProxy> => {
  let arrayBuffer: ArrayBuffer
  
  if (source instanceof File) {
    arrayBuffer = await source.arrayBuffer()
  } else if (source instanceof Uint8Array) {
    // Create a new ArrayBuffer copy to avoid detached ArrayBuffer issues
    const copy = new Uint8Array(source.length)
    copy.set(source)
    arrayBuffer = copy.buffer
  } else {
    // If it's already an ArrayBuffer, create a proper copy to ensure it's not detached
    const sourceView = new Uint8Array(source)
    const copy = new Uint8Array(sourceView.length)
    copy.set(sourceView)
    arrayBuffer = copy.buffer
  }

  const loadingTask = pdfjsLib.getDocument({
    data: arrayBuffer,
    cMapUrl: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/cmaps/`,
    cMapPacked: true,
  })

  return loadingTask.promise
}

/**
 * Render a PDF page to a canvas element
 * Returns the render task so it can be cancelled if needed
 */
export const renderPage = async (
  pdfDoc: PDFDocumentProxy,
  pageNumber: number,
  canvas: HTMLCanvasElement,
  scale: number = 1.0, // Default scale (100% - normal size)
  rotation: number = 0
): Promise<{ promise: Promise<void>; cancel: () => void }> => {
  const page = await pdfDoc.getPage(pageNumber)
  
  // Get the page's natural rotation from PDF metadata
  const pageRotation = page.rotate || 0
  console.log(`Page ${pageNumber} - Natural rotation: ${pageRotation}°, User rotation: ${rotation}°`)
  
  // PDF.js behavior:
  // - getViewport({ scale }) uses page.rotate automatically
  // - getViewport({ scale, rotation: 0 }) shows at 0° (ignoring page.rotate)
  // - getViewport({ scale, rotation: X }) shows at X° (ignoring page.rotate)
  // So if page.rotate = 90 and we want to show it upright, we need rotation = -90 or 270
  // For user rotation, we calculate: show at (userRotation - pageRotation) to compensate
  
  // Calculate rotation to show page upright, then apply user rotation
  const compensationRotation = (360 - pageRotation) % 360
  const totalRotation = (compensationRotation + rotation) % 360
  
  console.log(`Compensation: ${compensationRotation}°, Total: ${totalRotation}°`)
  
  // Only pass rotation if it's not 0, to let PDF.js handle page.rotate naturally
  const viewportOptions: { scale: number; rotation?: number } = { scale }
  if (totalRotation !== 0) {
    viewportOptions.rotation = totalRotation
  }
  
  const viewport = page.getViewport(viewportOptions)

  // Set canvas dimensions based on viewport
  canvas.height = viewport.height
  canvas.width = viewport.width

  const renderContext = {
    canvasContext: canvas.getContext('2d')!,
    viewport: viewport,
  }

  const renderTask = page.render(renderContext)
  
  return renderTask
}

/**
 * Get page thumbnail (smaller version for preview)
 */
export const renderThumbnail = async (
  pdfDoc: PDFDocumentProxy,
  pageNumber: number,
  canvas: HTMLCanvasElement,
  maxWidth: number = 200
): Promise<void> => {
  const page = await pdfDoc.getPage(pageNumber)
  const viewport = page.getViewport({ scale: 1 })
  
  // Calculate scale to fit maxWidth
  const scale = maxWidth / viewport.width
  const scaledViewport = page.getViewport({ scale })

  canvas.height = scaledViewport.height
  canvas.width = scaledViewport.width

  const renderContext = {
    canvasContext: canvas.getContext('2d')!,
    viewport: scaledViewport,
  }

  await page.render(renderContext).promise
}
