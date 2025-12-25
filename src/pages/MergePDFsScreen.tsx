import React, { useState } from 'react'
import { Icon } from '../components/Icon'

interface FileItem {
  id: string
  name: string
  size: string
  pages: number
}

const MergePDFsScreen: React.FC = () => {
  const [files, setFiles] = useState<FileItem[]>([
    { id: '1', name: 'Contract_Draft_v2.pdf', size: '1.2 MB', pages: 4 },
    { id: '2', name: 'Invoice_Oct_2023.pdf', size: '320 KB', pages: 1 },
    { id: '3', name: 'Project_Briefing.pdf', size: '2.8 MB', pages: 12 },
  ])
  const [mergeAllPages, setMergeAllPages] = useState(true)
  const [compress, setCompress] = useState(false)

  const totalPages = files.reduce((sum, file) => sum + file.pages, 0)
  const estimatedSize = '4.3 MB'

  const removeFile = (id: string) => {
    setFiles(files.filter(file => file.id !== id))
  }

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased transition-colors duration-200">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* Navbar */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-3 lg:px-10">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name="picture_as_pdf" />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">PDF Editor Pro</h2>
          </div>
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
              Tools
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
              Compress
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
              Convert
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
              Edit
            </a>
            <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
              Sign
            </a>
          </nav>
          <div className="flex gap-3">
            <button className="flex h-9 items-center justify-center rounded-lg px-4 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors">
              Log in
            </button>
            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors">
              Sign up
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 flex-col items-center px-4 py-8 md:px-10 lg:px-20">
          <div className="flex w-full max-w-6xl flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col items-center text-center gap-3 py-4">
              <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">
                Merge PDF files
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-2xl">
                Combine PDFs in the order you want with the easiest PDF merger available. Drag and drop to reorder files.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Column: File List */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* List Header */}
                <div className="flex items-center justify-between px-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Selected Files ({files.length})
                  </h3>
                  <button 
                    onClick={() => setFiles([])}
                    className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                  >
                    Remove All
                  </button>
                </div>

                {/* File List Container */}
                <div className="flex flex-col gap-3">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="group relative flex items-center gap-4 bg-white dark:bg-gray-800 p-3 pr-4 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm hover:border-primary/50 hover:shadow-md transition-all cursor-grab active:cursor-grabbing"
                    >
                      <div className="flex h-10 w-6 shrink-0 items-center justify-center text-slate-400 group-hover:text-primary transition-colors cursor-grab">
                        <Icon name="drag_indicator" />
                      </div>
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                        <Icon name="picture_as_pdf" className="text-[28px]" />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <p className="truncate text-base font-semibold text-slate-900 dark:text-white">{file.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {file.size} • {file.pages} {file.pages === 1 ? 'page' : 'pages'}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-gray-700 hover:text-slate-600 dark:hover:text-white transition-colors" 
                          title="Rotate"
                        >
                          <Icon name="rotate_right" className="text-[20px]" />
                        </button>
                        <button 
                          onClick={() => removeFile(file.id)}
                          className="flex size-8 items-center justify-center rounded-full text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors" 
                          title="Remove"
                        >
                          <Icon name="delete" className="text-[20px]" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Drop Zone (Add More) */}
                <div className="group flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-slate-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 py-10 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                  <div className="flex size-12 items-center justify-center rounded-full bg-slate-100 dark:bg-gray-700 text-slate-400 group-hover:text-primary transition-colors">
                    <Icon name="add_circle" className="text-[28px]" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-lg font-bold text-slate-900 dark:text-white">Add more files</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">or drop PDFs here</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions (Sticky) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Summary</h3>
                  <div className="flex flex-col gap-3 border-b border-slate-100 dark:border-gray-800 pb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Total Files</span>
                      <span className="font-medium text-slate-900 dark:text-white">{files.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Total Pages</span>
                      <span className="font-medium text-slate-900 dark:text-white">{totalPages}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500 dark:text-slate-400">Estimated Size</span>
                      <span className="font-medium text-slate-900 dark:text-white">{estimatedSize}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center">
                        <input
                          checked={mergeAllPages}
                          onChange={(e) => setMergeAllPages(e.target.checked)}
                          className="peer h-5 w-5 appearance-none rounded border border-slate-300 bg-white checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-primary"
                          id="merge-pages"
                          type="checkbox"
                        />
                        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                          <Icon name="check" className="text-[16px]" />
                        </span>
                      </div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer" htmlFor="merge-pages">
                        Merge all pages
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative flex items-center">
                        <input
                          checked={compress}
                          onChange={(e) => setCompress(e.target.checked)}
                          className="peer h-5 w-5 appearance-none rounded border border-slate-300 bg-white checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-primary"
                          id="compress"
                          type="checkbox"
                        />
                        <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                          <Icon name="check" className="text-[16px]" />
                        </span>
                      </div>
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer" htmlFor="compress">
                        Compress output file
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button className="group relative flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-blue-600 hover:shadow-primary/50 active:scale-[0.98]">
                      <span>Merge PDF</span>
                      <Icon name="arrow_forward" className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                  <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                    By clicking Merge PDF, you agree to our <a className="underline hover:text-primary" href="#">Terms</a> and <a className="underline hover:text-primary" href="#">Privacy Policy</a>.
                  </p>
                </div>

                {/* Ad / Promo Box */}
                <div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 p-5 border border-blue-100 dark:border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-yellow-900">
                      <Icon name="star" className="text-[18px]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Go Premium</h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Process files 50% faster and remove file size limits.</p>
                      <button className="mt-3 text-xs font-bold text-primary hover:underline">Get Pro →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © 2023 PDF Editor Pro. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default MergePDFsScreen

