'use client'
import React from 'react'

// Utility function to get the current active Tailwind breakpoint
const getCurrentBreakpoint = () => {
  if (typeof window === 'undefined') return
  if (window.innerWidth >= 1536) return '2xl'
  if (window.innerWidth >= 1280) return 'xl'
  if (window.innerWidth >= 1024) return 'lg'
  if (window.innerWidth >= 768) return 'md'
  if (window.innerWidth >= 640) return 'sm'
  return 'base (xs)'
}

// --- Box Sizes Showcase Component ---

const BoxSizesShowcase = ({ overflow }) => (
  <div
    className={`${overflow && 'overflow-clip'} rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-xl`}
  >
    <h2 className="mb-4 text-xl font-semibold text-gray-50">
      1. Box Sizes Showcase (Custom Container Widths)
    </h2>
    <p className="mb-6 text-sm text-gray-400">
      These boxes use the custom container width scale (w-3xs to w-4xl) to demonstrate different
      fixed sizes.
    </p>

    <div className="flex flex-col gap-4">
      {/* W-3XS (16rem / 256px) */}
      <div className="flex h-16 w-3xs items-center justify-center rounded-xl bg-fuchsia-700/80 text-sm font-bold text-gray-100 shadow-md">
        w-3xs (256px)
      </div>

      {/* W-XS (20rem / 320px) */}
      <div className="flex h-16 w-xs items-center justify-center rounded-xl bg-teal-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-xs (320px)
      </div>

      {/* W-SM (24rem / 384px) */}
      <div className="flex h-16 w-sm items-center justify-center rounded-xl bg-indigo-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-sm (384px)
      </div>

      {/* W-MD (28rem / 448px) */}
      <div className="flex h-16 w-md items-center justify-center rounded-xl bg-rose-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-md (448px)
      </div>

      {/* W-LG (32rem / 512px) */}
      <div className="flex h-16 w-lg items-center justify-center rounded-xl bg-cyan-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-lg (512px)
      </div>

      {/* W-XL (36rem / 576px) */}
      <div className="flex h-16 w-xl items-center justify-center rounded-xl bg-lime-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-xl (576px)
      </div>

      {/* W-2XL (42rem / 672px) */}
      <div className="flex h-16 w-2xl items-center justify-center rounded-xl bg-purple-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-2xl (672px)
      </div>

      {/* W-4XL (56rem / 896px) - Showing a larger jump */}
      <div className="flex h-16 w-4xl items-center justify-center rounded-xl bg-amber-600/80 text-sm font-bold text-gray-100 shadow-md">
        w-4xl (896px)
      </div>
    </div>
  </div>
)

// --- Text Sizes Showcase Component ---

const TextSizesShowcase = () => (
  <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-xl">
    <h2 className="mb-4 text-xl font-semibold text-gray-50">2. Font Size Showcase</h2>
    <p className="mb-4 text-sm text-gray-400">
      This demonstrates Tailwinds font size utility scale, from the smallest to the largest.
    </p>

    <div className="space-y-4">
      <p className="text-xs text-gray-400">text-xs (0.75rem / 12px) - Extra Small Text</p>
      <p className="text-sm text-gray-300">text-sm (0.875rem / 14px) - Small Text</p>
      <p className="text-base text-gray-200">text-base (1rem / 16px) - Base Text (Default)</p>
      <p className="text-lg font-medium text-gray-100">text-lg (1.125rem / 18px) - Large Text</p>
      <p className="text-xl font-semibold text-white">
        text-xl (1.25rem / 20px) - Extra Large Text
      </p>
      <p className="text-3xl font-bold text-blue-400">text-3xl (1.875rem / 30px) - Heading Text</p>
      <p className="text-5xl font-extrabold text-blue-500">text-5xl (3rem / 48px) - Massive Text</p>
    </div>
  </div>
)

// --- Breakpoint Detection Section (Simplified/Replaced with original BreakpointShowcase logic) ---
// Note: This relies on the original BreakpointShowcase logic but uses dark styles

const BreakpointsSection = ({ breakpoint }) => (
  <div className="rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-xl">
    <h2 className="mb-4 text-xl font-semibold text-gray-50">3. Live Breakpoint Detection</h2>
    <p className="mb-4 text-sm text-gray-400">
      This section uses JavaScript to detect the current screen width.
    </p>

    <div className="border-2 border-dashed border-gray-500 p-4 text-center">
      {/* <h3 className="mb-2 text-lg font-semibold text-gray-400">
        Current Screen Width: {window?.innerWidth}px
      </h3> */}
      <div
        className={`/* Default (xs) */ inline-block rounded-full bg-red-900 p-3 text-2xl font-bold text-red-300 transition-colors duration-300 sm:bg-orange-900 sm:text-orange-300 md:bg-yellow-900 md:text-yellow-300 lg:bg-green-900 lg:text-green-300 xl:bg-blue-900 xl:text-blue-300 2xl:bg-indigo-900 2xl:text-indigo-300`}
      >
        {breakpoint?.toUpperCase()} BREAKPOINT ACTIVE!
      </div>
    </div>
  </div>
)

// --- Final Component (Tailwind CSS Breakpoint Showcase) ---

export default function BreakpointShowcase() {
  const [showSizes, setShowSizes] = React.useState(true)
  const [showBreakpoints, setShowBreakpoints] = React.useState(true)
  const [breakpoint, setBreakpoint] = React.useState(undefined)
  const [overflow, setOverflow] = React.useState(true)

  // Effect to update the breakpoint state on resize
  React.useEffect(() => {
    setBreakpoint(getCurrentBreakpoint())

    const handleResize = () => {
      setBreakpoint(getCurrentBreakpoint())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    // Dark theme applied here
    <div className="min-h-screen bg-gray-950 p-6 md:p-10">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-50">
        Tailwind CSS Breakpoint Showcase 🧪
      </h1>

      {/* Controls Section - Dark theme applied */}
      <div className="mb-8 flex space-x-4 rounded-lg bg-gray-800 p-4">
        <label className="flex cursor-pointer items-center space-x-2">
          <input
            type="checkbox"
            checked={showSizes}
            onChange={() => setShowSizes(!showSizes)}
            className="form-checkbox h-5 w-5 text-blue-400"
          />
          <span className="font-medium text-gray-300">Show Box Sizes</span>
        </label>
        <label className="flex cursor-pointer items-center space-x-2">
          <input
            type="checkbox"
            checked={showBreakpoints}
            onChange={() => setShowBreakpoints(!showBreakpoints)}
            className="form-checkbox h-5 w-5 text-blue-400"
          />
          <span className="font-medium text-gray-300">Show Breakpoint Detection</span>
        </label>

        <label className="flex cursor-pointer items-center space-x-2">
          <input
            type="checkbox"
            checked={overflow}
            onChange={() => setOverflow(!overflow)}
            className="form-checkbox h-5 w-5 text-blue-400"
          />
          <span className="font-medium text-gray-300">Set overflow-clip</span>
        </label>
      </div>

      {/* Display Sections */}
      <div className="space-y-8">
        {/* Breakpoint Section */}
        {showBreakpoints && breakpoint && <BreakpointsSection breakpoint={breakpoint} />}

        {showSizes && <BoxSizesShowcase overflow={overflow} />}

        {/* NEW Text Size Section */}
        {showSizes && <TextSizesShowcase />}

        {/* Breakpoint Section */}
        {showBreakpoints && breakpoint && <BreakpointsSection breakpoint={breakpoint} />}
      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        Resize your browser window to see the effects!
      </p>
    </div>
  )
}
