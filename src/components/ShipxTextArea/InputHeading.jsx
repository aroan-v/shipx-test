import React from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { themeGuide } from '@/data/themeGuide'

export default function InputHeading({ title, isRequired, actionButton, description }) {
  return (
    <div className="flex items-end justify-between leading-5">
      <div>
        {/* Title */}
        <div className="flex gap-1">
          <div className={cn(themeGuide.inputHeading)}>{title}</div>
          {isRequired && <div className="text-red-600">*</div>}
        </div>

        {/* Description */}
        <div className={cn(themeGuide.inputDescription)}>{description}</div>
      </div>

      {actionButton && <Button>Upload File</Button>}
    </div>
  )
}
