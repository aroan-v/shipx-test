import React from 'react'
import Badge from '../Badge'
import SectionTitle from './SectionTitle'
import InputHeading from '../ShipxTextArea/InputHeading'
import { themeGuide } from '@/data/themeGuide'
import { cn } from '@/lib/utils'

const hsCodeDescription =
  'Input your product details, and let our system instantly handle the complexity of HTSUS (US) and HS (ROW) code selection, giving you the certainty required to ship anywhere.'

function SectionHeading({ content, description = hsCodeDescription }) {
  return (
    <div className="flex max-w-[1034px] items-start gap-6">
      {/* Left Container */}
      <div className="flex w-full flex-1 flex-col items-end gap-1">
        <Badge />
        <SectionTitle className={'text-right'}>
          Your <span className={themeGuide.sectionHeadingAccent}>HS Code AI Finder</span>
        </SectionTitle>
      </div>

      {/* Right Container */}
      <div className={cn(themeGuide.sectionDescription, 'flex-1')}>{description}</div>
    </div>
  )
}

export default SectionHeading
