import React from 'react'
import Badge from '../Badge'

function SectionHeading({ content }) {
  return (
    <div className="flex max-w-[1034px] items-start gap-6">
      <div className="flex flex-1 flex-col items-end gap-1">
        <Badge />
        <div className="text-3xl font-semibold">
          Your
          <span className="text-secondary"> HS Code AI Finder</span>
        </div>
      </div>

      <div className="text-foreground flex-1">
        Input your product details, and let our system instantly handle the complexity of HTSUS (US)
        and HS (ROW) code selection, giving you the certainty required to ship anywhere.
      </div>
    </div>
  )
}

export default SectionHeading
