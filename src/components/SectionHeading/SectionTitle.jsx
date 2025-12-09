import React from 'react'
import { cn } from '@/lib/utils'
import { themeGuide } from '@/data/themeGuide'

export default function SectionTitle({ className, children, props }) {
  return (
    <div className={cn(themeGuide.sectionHeading, className)} {...props}>
      {children}
    </div>
  )
}
