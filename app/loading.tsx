import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-ink/70 font-medium">Se încarcă...</p>
      </div>
    </div>
  )
}