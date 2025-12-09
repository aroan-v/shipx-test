import { cn } from '@/lib/utils'
import React from 'react'

function SectionContentGrid({ children, withDropShadow, className }) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-6 rounded-lg bg-gray-100/70 p-4 md:grid-cols-2',
        withDropShadow && 'dropShadowPink bg-white',
        className
      )}
    >
      {children}
    </div>
  )
}

export default SectionContentGrid
