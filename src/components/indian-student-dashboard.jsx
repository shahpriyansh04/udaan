'use client'

import { useState } from 'react'
import { Bell, Book, Calendar, ChevronRight, Download, GraduationCap, MessageCircle, Target, Trophy, Moon, Sun } from 'lucide-react'

export function IndianStudentDashboardComponent() {
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(false)

  const translations = {
    en: {
      title: 'Student Dashboard',
      welcome: 'Welcome back, Arjun!',
      progress: 'Your Progress',
      courses: 'Your Courses',
      goals: 'Your Goals',
      resources: 'Learning Resources',
      community: 'Community',
      notifications: 'Notifications',
    },
    hi: {
      title: 'छात्र डैशबोर्ड',
      welcome: 'वापसी पर स्वागत है, अर्जुन!',
      progress: 'आपकी प्रगति',
      courses: 'आपके पाठ्यक्रम',
      goals: 'आपके लक्ष्य',
      resources: 'शिक्षण संसाधन',
      community: 'समुदाय',
      notifications: 'सूचनाएं',
    },
  }

  const t = translations[language]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    (<div
      className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'} p-4 sm:p-6 lg:p-8 transition-colors duration-200`}>
      <div className="mb-6 flex items-center justify-between">
        <h1
          className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} sm:text-3xl`}>{t.title}</h1>
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-800 dark:text-white">
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-600" />}
          </button>
        </div>
      </div>
      <p
        className={`mb-8 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{t.welcome}</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Progress Section */}
        <div
          className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg transition-transform duration-200 hover:scale-105`}>
          <h2
            className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{t.progress}</h2>
          <div className="mb-4 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-2 rounded-full bg-green-500" style={{ width: '75%' }}></div>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>You're 75% through your current course!</p>
        </div>

        {/* Courses Section */}
        <div
          className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg transition-transform duration-200 hover:scale-105`}>
          <h2
            className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{t.courses}</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span className="flex items-center">
                <Book className="mr-2 h-4 w-4 text-indigo-500" />
                Vedic Mathematics
              </span>
              <ChevronRight className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </li>
            <li className="flex items-center justify-between">
              <span className="flex items-center">
                <Book className="mr-2 h-4 w-4 text-indigo-500" />
                Indian History
              </span>
              <ChevronRight className={`h-4 w-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </li>
          </ul>
        </div>

        {/* Goals Section */}
        <div
          className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg transition-transform duration-200 hover:scale-105`}>
          <h2
            className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{t.goals}</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Target className="mr-2 h-4 w-4 text-green-500" />
              Complete Vedic Math Quiz
            </li>
            <li className="flex items-center">
              <Target className="mr-2 h-4 w-4 text-yellow-500" />
              Read Bhagavad Gita Chapter 5
            </li>
          </ul>
        </div>

        {/* Learning Resources */}
        <div
          className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg sm:col-span-2 lg:col-span-3`}>
          <h2
            className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{t.resources}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className={`flex items-center rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4 transition-transform duration-200 hover:scale-105`}>
              <GraduationCap className="mr-3 h-6 w-6 text-indigo-500" />
              <div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Interactive Lesson</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vedic Math Techniques</p>
              </div>
            </div>
            <div
              className={`flex items-center rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4 transition-transform duration-200 hover:scale-105`}>
              <Trophy className="mr-3 h-6 w-6 text-yellow-500" />
              <div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Quiz</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ancient Indian Sciences</p>
              </div>
            </div>
            <div
              className={`flex items-center rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4 transition-transform duration-200 hover:scale-105`}>
              <Download className="mr-3 h-6 w-6 text-green-500" />
              <div>
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Downloadable Content</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Indian History Timeline</p>
              </div>
            </div>
          </div>
        </div>

        {/* Community Section */}
        <div
          className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg transition-transform duration-200 hover:scale-105`}>
          <h2
            className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{t.community}</h2>
          <div className="space-y-4">
            <button
              className={`flex w-full items-center justify-between rounded-lg ${darkMode ? 'bg-indigo-900 text-indigo-200 hover:bg-indigo-800' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'} px-4 py-2 transition-colors duration-200`}>
              <span className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Sanskrit Discussion
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              className={`flex w-full items-center justify-between rounded-lg ${darkMode ? 'bg-green-900 text-green-200 hover:bg-green-800' : 'bg-green-50 text-green-700 hover:bg-green-100'} px-4 py-2 transition-colors duration-200`}>
              <span className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Yoga Session
              </span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div
          className={`rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg transition-transform duration-200 hover:scale-105`}>
          <h2
            className={`mb-4 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{t.notifications}</h2>
          <ul className="space-y-2">
            <li
              className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Bell className="mr-2 h-4 w-4 text-blue-500" />
              New quiz available in Vedic Mathematics
            </li>
            <li
              className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <Bell className="mr-2 h-4 w-4 text-blue-500" />
              Upcoming virtual Bharatanatyam workshop
            </li>
          </ul>
        </div>
      </div>
    </div>)
  );
}