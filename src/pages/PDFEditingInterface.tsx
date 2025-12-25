import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Icon } from '../components/Icon'
import PDFViewer from '../components/PDFViewer/PDFViewer'

const PDFEditingInterface: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [pdfFileName, setPdfFileName] = useState<string>('Contract_Draft_v2.pdf')
  const [pdfFileData, setPdfFileData] = useState<ArrayBuffer | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [scale, setScale] = useState(1.5)
  const [rotation, setRotation] = useState(0)

  // Convert zoom percentage to scale (100% = 1.0, 150% = 1.5, etc.)
  const handleZoomIn = () => {
    setZoomLevel(prev => {
      const newZoom = Math.min(prev + 25, 300) // Max 300%
      setScale(newZoom / 100)
      return newZoom
    })
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const newZoom = Math.max(prev - 25, 50) // Min 50%
      setScale(newZoom / 100)
      return newZoom
    })
  }

  // Get uploaded PDF file from navigation state or sessionStorage
  useEffect(() => {
    // Check navigation state first (file metadata passed via navigate)
    const state = location.state as { pdfFileName?: string; pdfFileSize?: number } | null
    if (state?.pdfFileName) {
      setPdfFileName(state.pdfFileName)
    }

    // Check sessionStorage for file data
    const storedName = sessionStorage.getItem('uploadedPdfName')
    if (storedName) {
      setPdfFileName(storedName)
      
      // Retrieve PDF data from sessionStorage (stored as base64)
      const storedData = sessionStorage.getItem('uploadedPdfData')
      if (storedData) {
        try {
          // Convert base64 back to ArrayBuffer
          const binaryString = atob(storedData)
          const len = binaryString.length
          const bytes = new Uint8Array(len)
          for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i)
          }
          // Create a new ArrayBuffer by copying the data to avoid detachment
          const arrayBuffer = new ArrayBuffer(bytes.length)
          const view = new Uint8Array(arrayBuffer)
          view.set(bytes)
          console.log('PDF data loaded from sessionStorage, size:', arrayBuffer.byteLength, 'bytes')
          setPdfFileData(arrayBuffer)
        } catch (error) {
          console.error('Error converting stored PDF data:', error)
          alert('Error loading PDF data. Please try uploading again.')
        }
      } else {
        console.warn('No PDF data found in sessionStorage')
      }
    }
  }, [location.state])

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="h-14 md:h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-2 md:px-4 lg:px-6 shrink-0 z-20">
        <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
          <button 
            onClick={() => navigate('/')}
            className="p-1.5 md:p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors shrink-0"
          >
            <Icon name="arrow_back" className="text-lg md:text-xl" />
          </button>
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-1 md:gap-2">
              <h1 className="text-slate-900 dark:text-white font-bold text-xs md:text-sm lg:text-base tracking-tight truncate">{pdfFileName}</h1>
              <span className="px-1.5 md:px-2 py-0.5 rounded text-[9px] md:text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 shrink-0">
                EDITING
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Last saved 2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <div className="hidden md:flex items-center text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 mr-4 gap-2">
            <button 
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-900 dark:text-white transition-colors"
              title="Zoom Out"
            >
              <Icon name="remove" className="text-base" />
            </button>
            <span className="w-12 text-center">{zoomLevel}%</span>
            <button 
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-900 dark:text-white transition-colors"
              title="Zoom In"
            >
              <Icon name="add" className="text-base" />
            </button>
            <button 
              onClick={() => setRotation(prev => (prev + 90) % 360)}
              className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-900 dark:text-white transition-colors ml-2"
              title="Rotate 90°"
            >
              <Icon name="rotate_right" className="text-base" />
            </button>
            {totalPages > 0 && (
              <span className="px-2 ml-2">Page {currentPage} of {totalPages}</span>
            )}
          </div>
          <button className="hidden md:flex items-center justify-center h-9 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold transition-colors gap-2">
            <Icon name="share" className="text-[18px]" />
            <span>Share</span>
          </button>
          <button className="md:hidden flex items-center justify-center h-8 w-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors">
            <Icon name="share" className="text-base" />
          </button>
          <button 
            onClick={() => navigate('/export')}
            className="flex items-center justify-center h-8 md:h-9 px-2 md:px-4 rounded-lg bg-primary hover:bg-blue-700 text-white text-xs md:text-sm font-semibold transition-colors gap-1 md:gap-2 shadow-sm"
          >
            <Icon name="download" className="text-base md:text-[18px]" />
            <span className="hidden md:inline">Export PDF</span>
            <span className="md:hidden">Export</span>
          </button>
          <div 
            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden md:ml-2 border border-slate-300 dark:border-slate-600 bg-cover bg-center shrink-0"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkX4wUfmGD-0n97y6Q7WwP6epLWP_sWMpLAD10QAMXGneJ3TvcKLQP2khkEosWFtCrhCCHkSNdU21U3aZj4kPqQ0quQcd62t2bJoVh6ICiQYzHBkTXmHPbvpTgTv17VC7esGI4yirISkALNcLhCosUJICc3qQEQqLRLvlWt7Qrqz-fSIVb-zv-CdBtJaQ79wG6oSeZORHAPic5R0TnFlEdpFFEesPptFzeojEX9rXZkz2XxgxlZyhZ4Bo1s0HJK5D0E6PuUD0eRqVj")' }}
          />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Left) - Hidden on mobile, visible on iPad+ */}
        <aside className="hidden md:flex w-48 lg:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col shrink-0">
          {/* Sidebar Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800">
            <button className="flex-1 py-3 text-primary border-b-2 border-primary flex justify-center">
              <Icon name="grid_view" />
            </button>
            <button className="flex-1 py-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex justify-center transition-colors">
              <Icon name="bookmark" />
            </button>
            <button className="flex-1 py-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex justify-center transition-colors">
              <Icon name="comment" />
            </button>
          </div>
          {/* Thumbnails List */}
          <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-3 md:space-y-4">
            {/* Page 1 (Active) */}
            <div className="group relative cursor-pointer">
              <div className="aspect-[3/4] w-full bg-white border-2 border-primary rounded shadow-sm overflow-hidden relative">
                <div className="w-full h-full bg-slate-50 p-2 flex flex-col gap-1">
                  <div className="w-1/2 h-1 bg-slate-200 rounded-full mb-2"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-3/4 h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="mt-2 w-full h-8 bg-slate-100 rounded"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-primary mt-1 block text-center">Page 1</span>
            </div>
            {/* Page 2 */}
            <div className="group relative cursor-pointer">
              <div className="aspect-[3/4] w-full bg-white border border-slate-200 hover:border-slate-300 dark:border-slate-700 rounded shadow-sm overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-full h-full bg-slate-50 p-2 flex flex-col gap-1">
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-500 mt-1 block text-center">Page 2</span>
            </div>
            {/* Page 3 */}
            <div className="group relative cursor-pointer">
              <div className="aspect-[3/4] w-full bg-white border border-slate-200 hover:border-slate-300 dark:border-slate-700 rounded shadow-sm overflow-hidden relative opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-full h-full bg-slate-50 p-2 flex flex-col gap-1">
                  <div className="w-1/3 h-2 bg-slate-200 rounded mb-1"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-full h-0.5 bg-slate-200 rounded-full"></div>
                  <div className="w-1/2 h-24 bg-slate-100 rounded mt-2 mx-auto"></div>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-500 mt-1 block text-center">Page 3</span>
            </div>
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 flex flex-col relative min-w-0">
          {/* Toolbar (Sticky) */}
          <div className="h-12 md:h-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 shrink-0 z-10 shadow-sm overflow-x-auto">
            {/* Tool Group: Selection */}
            <div className="flex items-center gap-0.5 md:gap-1 pr-2 md:pr-4 border-r border-slate-200 dark:border-slate-800 shrink-0">
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Selection Tool">
                <Icon name="arrow_selector_tool" className="text-base md:text-lg" />
              </button>
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Hand Tool">
                <Icon name="pan_tool" className="text-base md:text-lg" />
              </button>
            </div>
            {/* Tool Group: Annotation */}
            <div className="flex items-center gap-0.5 md:gap-1 px-2 md:px-4 border-r border-slate-200 dark:border-slate-800 shrink-0">
              <div className="relative group">
                <button className="p-1.5 md:p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1" title="Highlighter">
                  <Icon name="ink_highlighter" filled className="text-base md:text-lg" />
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-400 border border-black/10"></div>
                </button>
              </div>
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Underline">
                <Icon name="format_underlined" className="text-base md:text-lg" />
              </button>
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Strikethrough">
                <Icon name="format_strikethrough" className="text-base md:text-lg" />
              </button>
            </div>
            {/* Tool Group: Objects */}
            <div className="flex items-center gap-0.5 md:gap-1 pl-2 md:pl-4 shrink-0">
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Add Text">
                <Icon name="title" className="text-base md:text-lg" />
              </button>
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Sticky Note">
                <Icon name="sticky_note_2" className="text-base md:text-lg" />
              </button>
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Shapes">
                <Icon name="shapes" className="text-base md:text-lg" />
              </button>
              <button className="p-1.5 md:p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" title="Signature">
                <Icon name="ink_pen" className="text-base md:text-lg" />
              </button>
            </div>
            <div className="ml-auto flex items-center shrink-0">
              <button className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold text-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <Icon name="magic_button" className="text-[16px]" />
                AI Summary
              </button>
              <button className="md:hidden p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-primary hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="AI Summary">
                <Icon name="magic_button" className="text-base" />
              </button>
            </div>
          </div>

          {/* PDF Canvas Area - Using PDFViewer Component */}
          <PDFViewer 
            pdfData={pdfFileData}
            fileName={pdfFileName}
            currentPage={currentPage}
            scale={scale}
            rotation={rotation}
            onPageChange={(page, total) => {
              setCurrentPage(page)
              setTotalPages(total)
            }}
            onScaleChange={(newScale) => {
              setScale(newScale)
              setZoomLevel(Math.round(newScale * 100))
            }}
          />

          {/* Floating Pagination Controls */}
          {totalPages > 0 && (
            <div className="fixed bottom-4 md:bottom-6 left-1/2 md:left-1/2 md:ml-32 transform -translate-x-1/2 flex items-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 p-1 z-50">
              <button 
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(prev => prev - 1)
                  }
                }}
                disabled={currentPage === 1}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="chevron_left" className="text-base md:text-[20px]" />
              </button>
              <div className="px-2 md:px-4 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 tabular-nums">
                <span className="hidden sm:inline">Page {currentPage} of {totalPages}</span>
                <span className="sm:hidden">{currentPage}/{totalPages}</span>
              </div>
              <button 
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(prev => prev + 1)
                  }
                }}
                disabled={currentPage === totalPages}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="chevron_right" className="text-base md:text-[20px]" />
              </button>
              <div className="w-px h-3 md:h-4 bg-slate-200 dark:bg-slate-600 mx-1"></div>
              <button 
                className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors" 
                title="Grid View"
              >
                <Icon name="grid_view" className="text-base md:text-[18px]" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default PDFEditingInterface

