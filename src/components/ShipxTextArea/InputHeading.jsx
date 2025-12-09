import React from 'react'
import { Button } from '../ui/button'

export default function InputHeading({ title, isRequired, actionButton, description }) {
  return (
    <div className="flex items-end justify-between leading-5">
      <div>
        {/* Title */}
        <div className="flex gap-1">
          <div className="text-foreground text-base leading-tight font-semibold">{title}</div>
          {isRequired && <div className="text-red-600">*</div>}
        </div>

        {/* Description */}
        <div className="text-muted-foreground text-sm leading-tight">{description}</div>
      </div>

      {actionButton && <Button>Upload File</Button>}
    </div>
  )
}
