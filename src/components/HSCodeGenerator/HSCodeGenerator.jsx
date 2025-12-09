import React from 'react'
import SectionContainer from '../SectionContainer'
import SectionHeading from '../SectionHeading'
import SectionContentGrid from '../SectionContentGrid'
import ShipxTextArea from '../ShipxTextArea'
import { Button } from '../ui/button'
import SectionTitle from '../SectionHeading/SectionTitle'
import ShipXResultArea from '../ShipXResultArea'
import formFields, { leftInputs, resultsContent, rightInputs } from '@/data/hs-code-content'

function HSCodeGenerator() {
  return (
    <>
      {/* Form */}
      <SectionContainer>
        <SectionHeading />

        {/* Form */}
        <SectionContentGrid>
          {/* Left column */}
          <div className="grid grid-rows-3 gap-2">
            {leftInputs.map((contentObj, index) => (
              <ShipxTextArea content={contentObj} key={index} />
            ))}
          </div>

          {/* Right column */}
          <div className="grid grid-rows-3 gap-2">
            {rightInputs.map((contentObj, index) => (
              <ShipxTextArea content={contentObj} key={index} />
            ))}

            <div className="grid grid-cols-[7fr_3fr] self-center rounded-md text-sm leading-tight">
              <div>
                <p className="font-semibold">Fields marked with * are required.</p>
                <p className="text-muted-foreground text-xs leading-none">
                  Its recommended to fill all inputs to maximize the AIs classification accuracy
                </p>
              </div>

              <Button className={'h-full max-h-14'} variant={'main'}>
                Generate HS Code
              </Button>
            </div>
          </div>
        </SectionContentGrid>
      </SectionContainer>

      {/* Result */}
      <HSCodeResult />

      {/* Button */}
      <Button className={'h-12'} variant={'main'}>
        Generate another HS Code
      </Button>
    </>
  )
}

export default HSCodeGenerator

function HSCodeResult() {
  const slicedResultsContent = resultsContent.slice(0, 3)
  const AiJustificationContent = {
    title: 'AI Justification',
    description: 'Explains the reasoning behind the classification to ensure transparency',
  }

  return (
    <SectionContainer>
      {/* Heading */}
      <SectionTitle className={'text-secondary text-center'}>HS Code Result</SectionTitle>

      {/* Content */}
      <SectionContentGrid withDropShadow={true}>
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {slicedResultsContent.map((contentObj, index) => (
            <ShipXResultArea content={contentObj} key={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="">
          <ShipXResultArea childClasses={'h-full'} content={AiJustificationContent}>
            <div className="h-full p-4">
              <p className="text-muted-foreground text-sm">
                {
                  "Code selected based on the primary material (Stainless Steel) and function (Household Article). The product falls under Chapter 73 (Articles of Iron or Steel). Heading 7323 is selected as it covers 'Table, kitchen or other household articles'. The material 'stainless steel' directs to Subheading 7323.93. The 10-digit US-specific code .0030 is applied as it directly covers 'Drinking bottles'. The plastic cap is considered an accessory and does not govern the classification."
                }
              </p>
            </div>
          </ShipXResultArea>
        </div>
      </SectionContentGrid>
    </SectionContainer>
  )
}
