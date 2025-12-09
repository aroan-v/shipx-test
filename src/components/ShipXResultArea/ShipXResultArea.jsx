import React from 'react'
import InputHeading from '../ShipxTextArea/InputHeading'
import { cn } from '@/lib/utils'

function ShipXResultArea({ content, children, childClasses }) {
  if (!content) return

  const { title, description } = content

  return (
    <div className="flex h-full flex-col gap-1">
      {/* Heading */}
      <InputHeading title={title} description={description} />

      {/* Children */}
      <div className={cn('min-h-16 rounded-md bg-violet-50', childClasses)}>{children}</div>
    </div>
  )
}

export default ShipXResultArea
