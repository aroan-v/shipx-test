import React from 'react'

function Badge({ content }) {
  return (
    <div className="text-secondary flex items-center gap-1 rounded-md bg-violet-100 px-4 py-2 text-sm font-bold">
      <div className="bg-secondary h-2 w-2 rounded-full"></div>
      Trade and Logistics Toolkit
    </div>
  )
}

export default Badge
