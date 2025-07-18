import React from 'react'
import { Menu, User, LogOut, Settings } from 'lucide-react'

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CD</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Client Dashboard</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Dashboard
            </button>
            <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              Clients
            </button>
            <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200">
              Reports
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Settings className="w-5 h-5" />
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium hidden sm:block">John Doe</span>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="py-2">
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Profile
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    Settings
                  </button>
                  <hr className="my-2 border-gray-200" />
                  <button 
                    onClick={() => onNavigate('login')}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar