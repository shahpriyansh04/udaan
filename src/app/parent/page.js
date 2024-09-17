"use client";
import {
  Bell,
  Book,
  Calendar,
  ChevronDown,
  MessageSquare,
  PieChart,
  User,
} from "lucide-react";

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 text-gray-800 p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">EduSupport</h1>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600 hover:text-purple-600 transition-colors" />
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-gray-600" />
              <span>CR</span>
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Parent Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Student Progress Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Student Progress
              </h3>
              <PieChart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">
                  Overall Performance
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Attendance</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                View Detailed Report
              </button>
            </div>
          </div>

          {/* Communication Tools Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Communication
              </h3>
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <div className="space-y-4">
              <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-md hover:bg-purple-50 transition duration-300 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message Teacher
              </button>
              <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-md hover:bg-purple-50 transition duration-300 flex items-center justify-center">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Educational Resources Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Resources</h3>
              <Book className="h-6 w-6 text-purple-600" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-md text-center hover:bg-purple-50 transition-colors">
                <Book className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">Study Guides</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center hover:bg-purple-50 transition-colors">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">Event Calendar</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center hover:bg-purple-50 transition-colors">
                <MessageSquare className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">Community Forum</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center hover:bg-purple-50 transition-colors">
                <PieChart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm text-gray-700">Performance Tips</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
