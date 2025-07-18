import React from 'react'
import Navbar from '../components/layout/Navbar'

const MainLayout = ({ children, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar onNavigate={onNavigate} />
      <main className="animate-fade-in">
        {children}
      </main>
    </div>
  )
}

export default MainLayout