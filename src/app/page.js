import NavBar from '@/components/NavBar'
import SectionHeading from '@/components/SectionHeading'
import ShipxTextArea from '@/components/ShipxTextArea'
import React from 'react'
import formFields, { leftInputs, resultsContent, rightInputs } from '@/data/hs-code-content'
import InputHeading from '@/components/ShipxTextArea/InputHeading'
import { Button } from '@/components/ui/button'
import SectionTitle from '@/components/SectionHeading/SectionTitle'
import ShipXResultArea from '@/components/ShipXResultArea'
import SectionContainer from '@/components/SectionContainer'
import SectionContentGrid from '@/components/SectionContentGrid'
import HSCodeGenerator from '@/components/HSCodeGenerator'
import SectionSpacer from '@/components/SectionSpacer'

export default function Home() {
  const leftAndRightColumnClasses = ''
  return (
    <div className="flex min-h-screen flex-col items-center justify-start space-y-15 bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <HSCodeGenerator />
      <SectionSpacer />
    </div>
  )
}
