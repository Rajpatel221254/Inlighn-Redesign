'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor')

    const moveCursor = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <div className="custom-cursor fixed top-0 left-0 w-6 h-6 bg-purple-500/30 z-[9999] rounded-full pointer-events-none transition-transform duration-75" />
  )
}
