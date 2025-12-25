import React from 'react'
import { Icon } from './Icon'
import { Link } from 'react-router-dom'

interface HeaderProps {
  title?: string
  showNav?: boolean
  showLogout?: boolean
}

export const Header: React.FC<HeaderProps> = ({ 
  title = 'PDF Editor', 
  showNav = false,
  showLogout = false 
}) => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-[#f0f2f4] dark:border-gray-800 px-6 py-3 w-full sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-[#111318] dark:text-white">
          <div className="size-8 flex items-center justify-center text-primary">
            <Icon name="picture_as_pdf" className="text-3xl" />
          </div>
          <Link to="/">
            <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              {title}
            </h2>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          {showNav && (
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-[#111318] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
                File
              </a>
              <a className="text-[#111318] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
                Edit
              </a>
              <a className="text-[#111318] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
                View
              </a>
              <a className="text-[#111318] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">
                Help
              </a>
            </nav>
          )}
          <div className="flex items-center gap-4">
            {showLogout && (
              <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-100 transition-colors">
                <span className="truncate">Log Out</span>
              </button>
            )}
            <div 
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-100 dark:ring-gray-800"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbhZo3KM2XLxgc1zOaTU92V3eUowD54-HEDhfXx7aA7djJ88sNa4CqtcP8WtSK9Ko00x7piG3409PV_eqovoIRLvccU3JNoeHDEIXMS8zSPlBVxed3WxBF--6VLV5bYTuecG3MQM9fviJ9Trv_nX5jMeBF9mUdaTH-3GtclNIXpEHKOSw_2xc6v4Xhdu4wU-V6o_MK3eaU6ym-ChZmuaUInpRSv6HklpjV0HXd6JozXm-FXNDHQPlMRmgM0CUMii_gcinzCCYVfM5n")' }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

