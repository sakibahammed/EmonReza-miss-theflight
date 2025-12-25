import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()

  const recentFiles = [
    { name: 'Annual_Report_2023.pdf', date: 'Oct 24, 2023', size: '2.4 MB', time: '2 hours ago' },
    { name: 'Project_Proposal_Draft_v2.pdf', date: 'Oct 23, 2023', size: '845 KB', time: 'Yesterday' },
    { name: 'Marketing_Assets.docx', date: 'Oct 21, 2023', size: '1.2 MB', time: '3 days ago' },
    { name: 'Invoice_#10245.pdf', date: 'Oct 15, 2023', size: '156 KB', time: '1 week ago' },
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white h-screen overflow-hidden flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#1a202c] border-r border-[#f0f2f4] dark:border-gray-700 flex flex-col justify-between flex-shrink-0 z-20">
        <div className="flex flex-col p-4 gap-6 h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center gap-3 px-2">
            <div className="bg-primary/10 flex items-center justify-center rounded-lg size-10 text-primary">
              <Icon name="description" filled />
            </div>
            <h1 className="text-[#111318] dark:text-white text-lg font-bold leading-normal">PDF Editor</h1>
          </div>
          
          {/* New PDF Button */}
          <button 
            onClick={() => navigate('/edit')}
            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-700 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm"
          >
            <Icon name="add" className="text-[20px] mr-2" />
            <span className="truncate">New PDF</span>
          </button>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary cursor-pointer">
              <Icon name="dashboard" filled />
              <p className="text-sm font-medium leading-normal">Dashboard</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 cursor-pointer text-[#616f89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors">
              <Icon name="folder_open" />
              <p className="text-sm font-medium leading-normal">My Files</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 cursor-pointer text-[#616f89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors">
              <Icon name="group" />
              <p className="text-sm font-medium leading-normal">Shared with Me</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 cursor-pointer text-[#616f89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors">
              <Icon name="build" />
              <p className="text-sm font-medium leading-normal">Tools</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 cursor-pointer text-[#616f89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors">
              <Icon name="delete" />
              <p className="text-sm font-medium leading-normal">Trash</p>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Bottom Nav */}
          <div className="flex flex-col gap-1 border-t border-[#f0f2f4] dark:border-gray-700 pt-4">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 cursor-pointer text-[#616f89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors">
              <Icon name="settings" />
              <p className="text-sm font-medium leading-normal">Settings</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f0f2f4] dark:hover:bg-gray-700 cursor-pointer text-[#616f89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors">
              <Icon name="cloud" />
              <div className="flex flex-1 items-center justify-between">
                <p className="text-sm font-medium leading-normal">Storage</p>
                <span className="text-xs text-gray-500">75%</span>
              </div>
            </div>
            <div className="px-3 mt-1">
              <div className="h-1.5 w-full bg-[#f0f2f4] dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden relative">
        {/* Top Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white dark:bg-[#1a202c] border-b border-[#f0f2f4] dark:border-gray-700">
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight hidden md:block">Overview</h2>
          <div className="flex flex-1 justify-end items-center gap-4 md:gap-6">
            {/* Search */}
            <label className="flex flex-col min-w-40 h-10 max-w-sm w-full relative">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f0f2f4] dark:bg-gray-800 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                <div className="text-[#616f89] dark:text-gray-400 flex items-center justify-center pl-3">
                  <Icon name="search" />
                </div>
                <input 
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 bg-transparent border-none h-full placeholder:text-[#616f89] px-3 text-sm font-normal leading-normal" 
                  placeholder="Search your PDFs..."
                />
              </div>
            </label>
            {/* Icons */}
            <button className="flex items-center justify-center rounded-lg size-10 hover:bg-[#f0f2f4] dark:hover:bg-gray-800 text-[#616f89] dark:text-gray-400 transition-colors">
              <Icon name="notifications" />
            </button>
            {/* Profile */}
            <div 
              className="size-10 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuByxf06lrOMTqr5OJgD55cjkbwEEGwW-txkkFZz4QLqG-3F7XUr6KCciB-qq2ntFnigRU9oERkqAm3KiS3mvRloiIUoMLvVhZZYYfONQj2n1DtMknoND5yR67vKoHlAst_tCTUIXe3txaVUP9MVnPEd3HCH4HB3kxBVLUOo5K7-HKKdG6kTJE7mBeN0QzyY2o09_NpapLA5S7Inae-qn0MhIzy6ALq3uVdm1C9xC6f1415UCACdOa6r7SqTquLDFkWWs3BRm5F61S0G")' }}
            />
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
          {/* Greeting & Hero Upload */}
          <section className="max-w-5xl mx-auto w-full flex flex-col gap-6">
            <div>
              <h1 className="text-[#111318] dark:text-white tracking-tight text-3xl font-bold leading-tight">Good Morning, Alex</h1>
              <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal mt-2">
                Manage your documents efficiently. What would you like to do today?
              </p>
            </div>
            
            {/* Upload Area */}
            <div 
              onClick={() => navigate('/edit')}
              className="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a202c] px-6 py-12 hover:border-primary/50 transition-colors group cursor-pointer shadow-sm"
            >
              <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary group-hover:scale-110 transition-transform duration-300">
                <Icon name="cloud_upload" className="text-4xl" />
              </div>
              <div className="flex max-w-[480px] flex-col items-center gap-2">
                <p className="text-[#111318] dark:text-white text-lg font-bold leading-tight text-center">Upload new document</p>
                <p className="text-[#616f89] dark:text-gray-400 text-sm text-center">Drag & drop PDF files here, or click to browse</p>
              </div>
              <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-blue-700 text-white text-sm font-bold shadow-md transition-all">
                Browse Files
              </button>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="max-w-5xl mx-auto w-full">
            <h3 className="text-[#111318] dark:text-white text-lg font-bold mb-4">Quick Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button 
                onClick={() => navigate('/merge')}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-[#1a202c] border border-[#f0f2f4] dark:border-gray-700 hover:border-primary hover:shadow-md transition-all group text-left"
              >
                <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                  <Icon name="merge" />
                </div>
                <span className="text-sm font-semibold text-[#111318] dark:text-white">Merge PDF</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-[#1a202c] border border-[#f0f2f4] dark:border-gray-700 hover:border-primary hover:shadow-md transition-all group text-left">
                <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                  <Icon name="transform" />
                </div>
                <span className="text-sm font-semibold text-[#111318] dark:text-white">Convert to Word</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-[#1a202c] border border-[#f0f2f4] dark:border-gray-700 hover:border-primary hover:shadow-md transition-all group text-left">
                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                  <Icon name="compress" />
                </div>
                <span className="text-sm font-semibold text-[#111318] dark:text-white">Compress PDF</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white dark:bg-[#1a202c] border border-[#f0f2f4] dark:border-gray-700 hover:border-primary hover:shadow-md transition-all group text-left">
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <Icon name="signature" />
                </div>
                <span className="text-sm font-semibold text-[#111318] dark:text-white">eSign PDF</span>
              </button>
            </div>
          </section>

          {/* Recent Files */}
          <section className="max-w-5xl mx-auto w-full pb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold">Recent Documents</h3>
              <button className="text-sm font-medium text-primary hover:underline">View All</button>
            </div>
            <div className="bg-white dark:bg-[#1a202c] rounded-xl border border-[#f0f2f4] dark:border-gray-700 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f8f9fa] dark:bg-gray-800 border-b border-[#f0f2f4] dark:border-gray-700 text-xs uppercase text-[#616f89] dark:text-gray-400">
                    <th className="px-6 py-4 font-semibold tracking-wider">Name</th>
                    <th className="px-6 py-4 font-semibold tracking-wider hidden sm:table-cell">Date Modified</th>
                    <th className="px-6 py-4 font-semibold tracking-wider hidden md:table-cell">Size</th>
                    <th className="px-6 py-4 font-semibold tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f2f4] dark:divide-gray-700">
                  {recentFiles.map((file, index) => (
                    <tr 
                      key={index}
                      onClick={() => navigate('/edit')}
                      className="group hover:bg-[#f8f9fa] dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {file.name.endsWith('.pdf') ? (
                            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 rounded p-1.5 flex items-center justify-center">
                              <Icon name="picture_as_pdf" className="text-[20px]" />
                            </div>
                          ) : (
                            <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded p-1.5 flex items-center justify-center">
                              <Icon name="description" className="text-[20px]" />
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium text-[#111318] dark:text-white">{file.name}</p>
                            <p className="text-xs text-[#616f89] dark:text-gray-500 sm:hidden">{file.time}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-400 hidden sm:table-cell">{file.date}</td>
                      <td className="px-6 py-4 text-sm text-[#616f89] dark:text-gray-400 hidden md:table-cell">{file.size}</td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={(e) => { e.stopPropagation(); }}
                          className="text-[#616f89] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded-full transition-colors"
                        >
                          <Icon name="more_vert" className="text-[20px]" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

