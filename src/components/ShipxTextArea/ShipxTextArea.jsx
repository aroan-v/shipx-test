'use client'
import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import InputHeading from './InputHeading'
import { CircleX, ImageUpIcon, Plus, PlusIcon, Upload, UploadCloud, UploadIcon } from 'lucide-react'

function ShipxTextArea({ content }) {
  if (!content) return

  const { isRequired, helper, title, description, actionButton, placeholder, type } = content
  return (
    <div className="flex flex-col gap-1">
      {/* Heading */}
      <InputHeading
        title={title}
        isRequired={isRequired}
        actionButton={actionButton}
        description={description}
      />

      {/* Upload */}
      {type === 'upload' && <UploadArea />}

      {/* Text Area */}
      {type === 'text-area' && <Textarea placeholder={placeholder} />}

      {/* Tab */}
      {type === 'tab' && <Tab />}

      <div className="text-muted-foreground w-full text-right text-xs">{helper || '\u00A0'}</div>
    </div>
  )
}

function UploadArea({}) {
  return (
    <div className="rounded-md">
      <div className="border-input grid h-16 grid-cols-[3fr_7fr] gap-1 rounded-md border bg-white p-1">
        {/* Upload section */}
        <Button className="flex h-full flex-col items-center justify-center gap-1">
          <ImageUpIcon className="size-5 text-gray-600" />
          <p className="text-foreground text-xs leading-tight font-medium">Upload files</p>
        </Button>

        {/* Files */}
        <div className="grid grid-cols-5 gap-1 *:flex *:items-center *:justify-center *:rounded-md *:border *:border-dashed *:border-gray-400">
          <div className="">
            <PlusIcon className="text-muted-foreground" />
          </div>
          <div className="">
            <PlusIcon className="text-muted-foreground" />
          </div>
          <div className="">
            <PlusIcon className="text-muted-foreground" />
          </div>
          <div className="">
            <PlusIcon className="text-muted-foreground" />
          </div>
          <div className="">
            <PlusIcon className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="grid h-16 grid-cols-[2fr_8fr] items-start gap-1 rounded-md border border-dashed border-gray-600">
      {/* Action */}
      {/* <Button className={'full flex gap-2 text-sm leading-tight'}>
        <Upload className="size-5" />
        Upload file
      </Button> */}

      {/* Files uploaded */}
      {/* <div className="border-input flex w-full flex-wrap items-start gap-2 rounded-md border px-1 py-1">
        <UploadedFile />
        <UploadedFile />
        <UploadedFile />
        <UploadedFile />
        <UploadedFile />
      </div> */}
    </div>
  )
}

function UploadedFile({ filename = ' 943859.png' }) {
  return (
    <div className="relative rounded-sm bg-gray-200 px-2 py-1">
      {filename}

      <button className={'absolute -top-2 -right-2 cursor-pointer'}>
        <CircleX className="size-5" />
      </button>
    </div>
  )
}

function Tab({ content }) {
  const classes = 'whitespace-normal flex-1 flex-col flex-wrap gap-0 h-auto'
  const [selected, setSelected] = React.useState('usa')

  return (
    <div className="border-input flex h-16 w-full gap-1 rounded-md border bg-white p-1">
      <Button
        className={classes}
        variant={selected === 'usa' ? 'tabActive' : 'tabDefault'}
        onClick={() => setSelected('usa')}
      >
        USA <span className="text-xs whitespace-nowrap">(HTSUS - 10 digits)</span>
      </Button>

      <Button
        className={classes}
        variant={selected === 'row' ? 'tabActive' : 'tabDefault'}
        onClick={() => setSelected('row')}
      >
        Rest of World <span className="text-xs whitespace-nowrap"> (HS - 6 digits)</span>
      </Button>
    </div>
  )
}

function TabBUtton({ content }) {}

export default ShipxTextArea
