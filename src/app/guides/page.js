import NavBar from '@/components/NavBar'
import StyleGuide from '@/components/StyleGuide'
import React from 'react'

export default function Styles() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start space-y-15 bg-zinc-50 font-sans dark:bg-black">
      <NavBar />

      <StyleGuide />
    </div>
  )
}
