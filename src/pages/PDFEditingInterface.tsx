import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'

const PDFEditingInterface: React.FC = () => {
  const navigate = useNavigate()

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
              <h1 className="text-slate-900 dark:text-white font-bold text-xs md:text-sm lg:text-base tracking-tight truncate">Contract_Draft_v2.pdf</h1>
              <span className="px-1.5 md:px-2 py-0.5 rounded text-[9px] md:text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 shrink-0">
                EDITING
              </span>
            </div>
            <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Last saved 2 minutes ago</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 md:gap-3 shrink-0">
          <div className="hidden md:flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 mr-4">
            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-900 dark:text-white">
              <Icon name="remove" className="text-[20px]" />
            </button>
            <span className="w-12 text-center">100%</span>
            <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-900 dark:text-white">
              <Icon name="add" className="text-[20px]" />
            </button>
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

          {/* PDF Canvas Area */}
          <div className="flex-1 overflow-auto bg-background-light dark:bg-[#0f1115] relative p-2 md:p-4 lg:p-8 flex justify-center">
            {/* The PDF Page */}
            <div className="w-full max-w-full md:max-w-[600px] lg:max-w-[850px] bg-white text-slate-900 min-h-[600px] md:min-h-[800px] lg:min-h-[1100px] pdf-page-shadow rounded-sm relative selection:bg-primary/20 selection:text-primary mb-16 md:mb-20">
              {/* Page Content Simulation */}
              <div className="p-4 md:p-8 lg:p-16 flex flex-col h-full font-serif leading-relaxed text-xs md:text-sm lg:text-[15px] text-justify text-[#2c2c2c]">
                {/* Header */}
                <div className="flex justify-between items-end border-b-2 border-black pb-4 mb-10">
                  <div>
                    <h2 className="text-2xl font-bold tracking-wide font-sans text-black">SERVICE AGREEMENT</h2>
                    <p className="text-xs text-slate-500 font-sans mt-1">REF: CONTRACT-2023-8842</p>
                  </div>
                  <div className="text-right font-sans text-xs text-slate-500">
                    <p>Date: October 24, 2023</p>
                    <p>Page 1 of 12</p>
                  </div>
                </div>
                {/* Clause 1 */}
                <div className="mb-6 relative group/clause">
                  <h3 className="font-bold text-black uppercase text-sm mb-2 font-sans">1. Scope of Services</h3>
                  <p className="mb-2">
                    This Agreement ("Agreement") is made and entered into as of the date first set forth above (the "Effective Date") by and between <strong className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded-sm cursor-text text-primary">TechGlobal Solutions Inc.</strong> ("Provider") and <strong className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded-sm cursor-text text-primary">Future Enterprise Ltd.</strong> ("Client").
                  </p>
                  <p>
                    The Provider agrees to perform the services described in <span className="bg-yellow-200/80 dark:bg-yellow-600/40 px-0.5 rounded-sm border-b-2 border-yellow-400 dark:border-yellow-500 cursor-pointer relative group/highlight">
                      Exhibit A attached hereto (the "Services").
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover/highlight:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                        Highlight added by You
                      </span>
                    </span>
                    Provider shall perform the Services in a professional manner and in accordance with the industry standards.
                  </p>
                  {/* Comment Indicator on Side - Hidden on mobile */}
                  <div className="hidden md:block absolute -right-12 top-0 cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-yellow-100 border border-yellow-300 rounded-lg shadow-sm flex items-center justify-center text-yellow-700">
                      <Icon name="comment" className="text-[18px]" />
                    </div>
                  </div>
                </div>
                {/* Clause 2 */}
                <div className="mb-6">
                  <h3 className="font-bold text-black uppercase text-sm mb-2 font-sans">2. Term and Termination</h3>
                  <p className="mb-2">
                    This Agreement shall commence on the Effective Date and shall continue for a period of <span className="bg-primary/20 text-primary font-bold px-1 py-0.5 rounded border border-primary border-dashed relative">
                      12 months
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] px-1 rounded-full">!</span>
                    </span>, unless earlier terminated in accordance with the provisions hereof.
                  </p>
                  <p className="text-slate-400 line-through decoration-red-500 decoration-2">
                    Either party may terminate this Agreement upon thirty (30) days prior written notice to the other party.
                  </p>
                  <p className="text-primary mt-2 italic text-sm border-l-2 border-primary pl-3 bg-primary/5 py-1">
                    [Proposed Change]: Either party may terminate this Agreement upon sixty (60) days prior written notice, subject to a termination fee.
                  </p>
                </div>
                {/* Clause 3 */}
                <div className="mb-6">
                  <h3 className="font-bold text-black uppercase text-sm mb-2 font-sans">3. Payment Terms</h3>
                  <p className="mb-2">
                    Client shall pay Provider for the Services at the rates set forth in Exhibit A. Payment obligations are non-cancelable and fees paid are non-refundable. Client shall pay all invoiced amounts within thirty (30) days after the date of Provider's invoice.
                  </p>
                  <div className="my-6 p-4 border border-slate-200 bg-slate-50 rounded flex items-center gap-4">
                    <div 
                      className="h-16 w-24 bg-cover bg-center rounded border border-slate-300"
                      style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgz1gKu4qs6Scqe7yLTBvhHvxd-bEiVA1rxPB-QKGv8snJEuEG7dkuxcg5Uzkm6zwxrL0d3wROQeB70Y4UycAjJiS6wCL2IxjpDpOrEsHNVrA2Sofrrqbv-Wh42SZ3j91zmQgCTj4zi_KqnhcN4VsHZwaJC11L9n7sjvt5im6jb-HojFCQqKKq7u8NwUBp_hDLeqEtW5XoMlmCTTbN81U-GabsQsKsLEgexx17JbSUzITF0xweaCT1KypbCvKGLUWRxQ-dY-hoAx67")' }}
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Signed by</p>
                      <p className="text-sm font-semibold">John Doe, CEO</p>
                      <p className="text-xs text-slate-500">Oct 24, 2023 14:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pagination Controls */}
          <div className="fixed bottom-4 md:bottom-6 left-1/2 md:left-1/2 md:ml-32 transform -translate-x-1/2 flex items-center bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 p-1 z-50">
            <button className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              <Icon name="chevron_left" className="text-base md:text-[20px]" />
            </button>
            <div className="px-2 md:px-4 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 tabular-nums">
              <span className="hidden sm:inline">Page 1 of 12</span>
              <span className="sm:hidden">1/12</span>
            </div>
            <button className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
              <Icon name="chevron_right" className="text-base md:text-[20px]" />
            </button>
            <div className="w-px h-3 md:h-4 bg-slate-200 dark:bg-slate-600 mx-1"></div>
            <button className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors" title="Grid View">
              <Icon name="grid_view" className="text-base md:text-[18px]" />
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PDFEditingInterface

