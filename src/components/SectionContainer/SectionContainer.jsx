import { cn } from '@/lib/utils'
import React from 'react'

function SectionContainer({ className, children }) {
  return <section className={cn('max-w-[1034px] space-y-12', className)}>{children}</section>
}

export default SectionContainer
