import React, { useState } from "react"
import { createContext, useContext, useEffect } from 'react'

const AppContext = createContext({})

const AppWrapper = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const [notificationMsg, setNotificationMsg] = useState('')

  const notify = (msg) => {
    const notification = document.querySelector('.notification')
    notification.classList.remove('-translate-y-20')
    setNotificationMsg(msg)
    setTimeout(() => {
      notification.classList.add('-translate-y-20')
    }, 2500)
  }

  let app = {
    theme,
    notify
  }

  return (
    <AppContext.Provider value={app}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppWrapper, useAppContext }
