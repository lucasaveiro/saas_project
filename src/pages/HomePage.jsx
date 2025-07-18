import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { Plus, Users, TrendingUp, DollarSign, Calendar } from 'lucide-react'

const HomePage = ({ onNavigate }) => {
  return (
    <MainLayout onNavigate={onNavigate}>
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Client Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome back! Here's what's happening with your clients today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 animate-slide-up">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Clients</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">247</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-sm font-medium">+12% from last month</span>
            </div>
          </div>

          <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Revenue</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">$54,239</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-sm font-medium">+8% from last month</span>
            </div>
          </div>

          <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Projects</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">18</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-green-600 text-sm font-medium">+3 new this week</span>
            </div>
          </div>

          <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Meetings Today</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">5</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-blue-600 text-sm font-medium">Next at 2:00 PM</span>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="card p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to add a new client?
              </h2>
              <p className="text-gray-600 text-lg">
                Get started by creating a new client profile and begin managing their projects.
              </p>
            </div>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Client</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Clients</h3>
            <div className="space-y-4">
              {[
                { name: 'Sarah Johnson', company: 'Tech Solutions Inc.', status: 'Active', color: 'green' },
                { name: 'Michael Chen', company: 'Design Studio', status: 'Pending', color: 'yellow' },
                { name: 'Emma Davis', company: 'Marketing Pro', status: 'Active', color: 'green' },
                { name: 'David Wilson', company: 'Startup Hub', status: 'Active', color: 'green' },
              ].map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.company}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    client.color === 'green' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {client.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Meetings</h3>
            <div className="space-y-4">
              {[
                { time: '2:00 PM', client: 'Sarah Johnson', type: 'Project Review', color: 'blue' },
                { time: '3:30 PM', client: 'Michael Chen', type: 'Initial Consultation', color: 'purple' },
                { time: '5:00 PM', client: 'Emma Davis', type: 'Strategy Meeting', color: 'green' },
              ].map((meeting, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{meeting.type}</p>
                    <p className="text-sm text-gray-600">{meeting.client} • {meeting.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage