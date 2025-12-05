import NavBar from '@/components/NavBar'
import SectionHeading from '@/components/SectionHeading'
import ShipxTextArea from '@/components/ShipxTextArea'
import React from 'react'
import formFields from '@/data/hs-code-content'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <NavBar />
      <div className="h-25"></div>

      <div className="flex flex-col gap-12">
        <SectionHeading />

        <div className="grid w-full max-w-[1034px] grid-cols-1 gap-6 md:grid-cols-2">
          {formFields.map((contentObj, index) => (
            <ShipxTextArea content={contentObj} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
