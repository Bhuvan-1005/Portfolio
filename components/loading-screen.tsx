"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-primary"></div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground animate-pulse">Loading Portfolio</h2>
          <p className="text-muted-foreground">Preparing something amazing...</p>
        </div>
      </div>
    </div>
  )
}
