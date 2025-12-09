import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // 1. Layout & Sizing
        'flex field-sizing-content h-16 w-full resize-none',

        // 2. Spacing & Borders
        'border-input rounded-md border px-3 py-2',

        // 3. Typography
        'placeholder:text-placeholder text-base placeholder:italic md:text-sm',

        // 4. Background & Effects
        'dark:bg-input/30 bg-white shadow-xs',

        // 5. Interactivity & Transitions
        'transition-[color,box-shadow] outline-none',

        // 6. Focus States
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',

        // 7. Disabled States
        'disabled:cursor-not-allowed disabled:opacity-50',

        // 8. Error/Validation States (Aria)
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',

        className
      )}
      {...props}
    />
  )
}

export { Textarea }
