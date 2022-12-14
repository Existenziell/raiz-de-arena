import { useState, useEffect } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState()

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  const toggleDarkMode = (mode) => {
    if (mode === 'dark') {
      localStorage.theme = 'dark'
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      localStorage.theme = 'light'
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className='mt-6 mr-6'>
      {!darkMode ?
        <svg onClick={() => toggleDarkMode('dark')} xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 hover:text-slate-400 cursor-pointer text-brand hover:scale-105' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
        </svg>
        :
        <svg onClick={() => toggleDarkMode('light')} xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 hover:text-slate-400 cursor-pointer text-brand hover:scale-105' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
        </svg>
      }
    </div>
  )
}

export default DarkModeToggle
