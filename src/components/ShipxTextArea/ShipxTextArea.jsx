import React from 'react'
import { Textarea } from '../ui/textarea'

function ShipxTextArea({ content }) {
  if (!content) return

  const { isRequired, helper, title, description, placeholder } = content
  return (
    <div className="flex flex-col gap-1">
      <div className="leading-5">
        {/* Title */}
        <div className="flex gap-1">
          <div className="text-foreground font-semibold">{title}</div>

          {isRequired && <div className="text-red-600">*</div>}
        </div>

        {/* Description */}
        <div className="text-muted-foreground">{description}</div>
      </div>

      {/* Text Area */}
      <Textarea placeholder={placeholder} />

      <div className="text-muted-foreground w-full text-right text-xs">{helper || '\u00A0'}</div>
    </div>
  )
}

export default ShipxTextArea
