import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionTitle({ className, children, props }) {
  return (
    <div className={cn('text-3xl font-semibold', className)} {...props}>
      {children}
    </div>
  )
}
