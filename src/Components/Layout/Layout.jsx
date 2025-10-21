import React, { useState } from 'react'
import Leftsidebar from '../LeftSidebar/Leftsidebar'
import Rightsidebar from '../RightSidebar/Rightsidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div className="relative flex flex-col md:flex-row bg-gray-950 text-white min-h-screen">
      
      {/* Mobile top navbar */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-900">
        <h1 className="text-lg font-bold">My Portfolio</h1>
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 w-full py-4 gap-2">
          <Leftsidebar />
        </div>
      )}

      {/* Left Sidebar (desktop only) */}
      <div className="hidden md:flex fixed left-4 top-0 h-full flex-col items-center p-4">
        <Leftsidebar />
      </div>

      {/* Right Sidebar (desktop only) */}
      <div className="hidden md:flex fixed right-4 top-0 h-full flex-col items-center p-4">
        <Rightsidebar />
      </div>

      {/* Main scrollable content */}
      <main className="flex-1 w-full md:ml-[80px] md:mr-[80px] px-4 py-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
