"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface LoadingContextType {
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType>({ isLoading: true })

export function useLoading() {
  return useContext(LoadingContext)
}

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}