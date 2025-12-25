import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Icon } from '../components/Icon'

const ExportOptionsScreen: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'word'>('pdf')
  const [filename, setFilename] = useState('Quarterly_Report_Q3_Draft_v2')
  const [flattenAnnotations, setFlattenAnnotations] = useState(false)
  const [optimizeForWeb, setOptimizeForWeb] = useState(true)

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white min-h-screen flex flex-col overflow-x-hidden">
      <Header title="PDF Editor" showNav showLogout />
      
      {/* Main Content Area */}
      <main className="flex-grow flex justify-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel: Configuration */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Page Heading */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[#111318] dark:text-white tracking-tight text-[32px] font-bold leading-tight">
                Export Document
              </h1>
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                Configure your settings and choose a format to save your document.
              </p>
            </div>

            {/* Format Selection */}
            <section className="flex flex-col gap-4">
              <h3 className="text-base font-semibold text-[#111318] dark:text-white">Select Format</h3>
              
              {/* PDF (Selected) */}
              <div 
                onClick={() => setSelectedFormat('pdf')}
                className={`group cursor-pointer relative flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm border-2 transition-all ${
                  selectedFormat === 'pdf' ? 'border-primary' : 'border-transparent ring-1 ring-gray-200 dark:ring-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                {selectedFormat === 'pdf' && (
                  <div className="absolute top-4 right-4 text-primary">
                    <Icon name="check_circle" filled />
                  </div>
                )}
                {selectedFormat !== 'pdf' && (
                  <div className="absolute top-4 right-4 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">
                    <Icon name="radio_button_unchecked" />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 shrink-0">
                    <Icon name="picture_as_pdf" className="text-2xl" />
                  </div>
                  <div className="flex flex-col gap-1 pr-8">
                    <p className="text-[#111318] dark:text-white text-base font-bold leading-tight">Standard PDF</p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      Best for sharing and printing. Preserves all formatting and layout exactly as seen.
                    </p>
                  </div>
                </div>
              </div>

              {/* Word (Unselected) */}
              <div 
                onClick={() => setSelectedFormat('word')}
                className={`group cursor-pointer relative flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm border-2 transition-all ${
                  selectedFormat === 'word' ? 'border-primary' : 'border-transparent ring-1 ring-gray-200 dark:ring-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                }`}
              >
                {selectedFormat === 'word' && (
                  <div className="absolute top-4 right-4 text-primary">
                    <Icon name="check_circle" filled />
                  </div>
                )}
                {selectedFormat !== 'word' && (
                  <div className="absolute top-4 right-4 text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors">
                    <Icon name="radio_button_unchecked" />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 shrink-0">
                    <Icon name="description" className="text-2xl" />
                  </div>
                  <div className="flex flex-col gap-1 pr-8">
                    <p className="text-[#111318] dark:text-white text-base font-bold leading-tight">Microsoft Word (.docx)</p>
                    <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal leading-normal">
                      Best for editing text. Layout may vary slightly from the original document.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* File Details Form */}
            <section className="flex flex-col gap-5 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
              <h3 className="text-base font-semibold text-[#111318] dark:text-white">File Configuration</h3>
              <div className="grid gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#111318] dark:text-gray-300" htmlFor="filename">
                    File Name
                  </label>
                  <div className="relative">
                    <input
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-[#111318] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow pr-16"
                      id="filename"
                      type="text"
                      value={filename}
                      onChange={(e) => setFilename(e.target.value)}
                    />
                    <span className="absolute right-4 top-2.5 text-sm text-gray-400 pointer-events-none">
                      .{selectedFormat === 'pdf' ? 'pdf' : 'docx'}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#111318] dark:text-gray-300" htmlFor="location">
                    Save Location
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <div className="absolute left-3 top-2.5 text-gray-400">
                        <Icon name="folder_open" className="text-[20px]" />
                      </div>
                      <input
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 pl-10 pr-4 py-2.5 text-sm text-gray-600 dark:text-gray-300 outline-none cursor-default"
                        id="location"
                        readOnly
                        type="text"
                        value="/Documents/Work/Reports"
                      />
                    </div>
                    <button className="shrink-0 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 px-4 py-2.5 text-sm font-medium text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      Browse...
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Advanced Settings */}
            <section className="flex flex-col gap-3">
              <button className="flex items-center justify-between w-full py-2 text-left group">
                <span className="text-sm font-medium text-[#111318] dark:text-white flex items-center gap-2">
                  <Icon name="settings" className="text-gray-400 group-hover:text-primary transition-colors" />
                  Advanced Settings
                </span>
                <Icon name="expand_more" className="text-gray-400 transform transition-transform group-hover:rotate-180" />
              </button>
              <div className="pl-2 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative inline-flex items-center">
                    <input
                      className="peer sr-only"
                      type="checkbox"
                      checked={flattenAnnotations}
                      onChange={(e) => setFlattenAnnotations(e.target.checked)}
                    />
                    <div className="h-5 w-9 rounded-full bg-gray-200 dark:bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20"></div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Flatten annotations and comments</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <div className="relative inline-flex items-center">
                    <input
                      className="peer sr-only"
                      type="checkbox"
                      checked={optimizeForWeb}
                      onChange={(e) => setOptimizeForWeb(e.target.checked)}
                    />
                    <div className="h-5 w-9 rounded-full bg-gray-200 dark:bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20"></div>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Optimize for web (Linearized)</span>
                </label>
              </div>
            </section>

            {/* Action Bar */}
            <div className="mt-4 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end gap-4">
              <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Cancel
              </button>
              <button className="flex items-center gap-2 px-8 py-2.5 rounded-lg bg-primary hover:bg-blue-700 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all">
                <span>Export Document</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </button>
            </div>
          </div>

          {/* Right Panel: Preview */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="sticky top-24 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 h-fit">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-[#111318] dark:text-white">Preview</h4>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  Page 1 of 12
                </span>
              </div>
              {/* Document Visual */}
              <div className="w-full bg-[#e5e7eb] dark:bg-[#1a202c] rounded-lg p-4 flex justify-center items-center min-h-[400px] overflow-hidden relative group/preview">
                <div className="w-[80%] aspect-[1/1.414] bg-white shadow-lg transition-transform duration-300 group-hover/preview:scale-[1.02] flex flex-col overflow-hidden relative">
                  {/* Header Area */}
                  <div className="h-16 w-full bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20"></div>
                    <div className="h-3 w-32 rounded bg-slate-200"></div>
                  </div>
                  {/* Body Content Placeholder */}
                  <div className="p-6 flex flex-col gap-4">
                    <div className="h-6 w-3/4 bg-slate-200 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                    </div>
                    <div className="h-32 w-full bg-slate-50 rounded border border-dashed border-slate-200 mt-4 flex items-center justify-center">
                      <Icon name="image" className="text-slate-300 text-4xl" />
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Total Size</span>
                  <span className="text-xs font-medium text-[#111318] dark:text-white">~4.2 MB</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Last Modified</span>
                  <span className="text-xs font-medium text-[#111318] dark:text-white">Today, 10:42 AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Author</span>
                  <span className="text-xs font-medium text-[#111318] dark:text-white">Jane Doe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ExportOptionsScreen

