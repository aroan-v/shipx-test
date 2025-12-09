import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <nav className="navBarShadow bg:white text-foreground flex h-[90px] w-full items-center justify-center px-8">
      {/* Container to separate or group items */}
      <div className="flex gap-8 font-medium">
        <Link
          href="/"
          className="hover:text-secondary transition-colors hover:underline hover:underline-offset-4"
        >
          HS Code Generator UI
        </Link>

        <Link
          href="/guides"
          className="hover:text-secondary transition-colors hover:underline hover:underline-offset-4"
        >
          Style Guide
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
