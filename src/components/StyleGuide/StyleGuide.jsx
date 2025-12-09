'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { themeStyles } from '@/data/themeGuide'

const styleSystem = [
  {
    category: 'Typography',
    items: [
      {
        name: 'Page Title (H1)',
        classes: themeStyles.pageTitle,
        sampleText: 'Everything You Need To Grow Internationally',
        name2: 'Accent Text',
        classes2: themeStyles.pageTitleAccent,
        sampleText2: 'Internationally',
      },
      {
        name: 'Section Heading (H2)',
        classes: themeStyles.sectionHeading,
        sampleText: 'Your ',
        name2: 'Accent Text',
        classes2: themeStyles.sectionHeadingAccent,
        sampleText2: 'HS Code Tracker',
      },
      {
        name: 'Section Description',
        classes: themeStyles.sectionDescription,
        sampleText:
          'Input your product details, and let our system instantly handle the complexity...',
      },
      {
        name: 'Body Text',
        classes: themeStyles.bodyText,
        sampleText: 'Ship Products To Global Markets Quickly And Securely...',
      },
      {
        name: 'Subtitle (H3)',
        classes: themeStyles.subtitle,
        sampleText: 'Account Details',
      },
      {
        name: 'Input Heading',
        classes: themeStyles.inputHeading,
        sampleText: 'Product Description',
      },
      {
        name: 'Input Description',
        classes: themeStyles.inputDescription,
        sampleText: 'Provide a detailed description of your product',
      },
      {
        name: 'Input Placeholder',
        classes: themeStyles.inputPlaceholder,
        sampleText: "e.g. 'Men's leather dress shoes with rubber soles",
      },
      {
        name: 'CTA Heading',
        classes: themeStyles.ctaHeading,
        sampleText: 'Experience the Future of Shipping',
      },
      {
        name: 'CTA Description',
        classes: themeStyles.ctaDescription,
        sampleText: 'Experience the Future of Shipping',
      },
      {
        name: 'Footer Body Text',
        classes: themeStyles.footerBody,
        sampleText: 'Empowering businesses to ship globally with confidence...',
      },
      {
        name: 'Footer Item Heading',
        classes: themeStyles.footerHeading,
        sampleText: 'Quick Links',
      },
      {
        name: 'Footer Item',
        classes: themeStyles.footerItem,
        sampleText: 'Quick Links',
      },
    ],
  },
  {
    category: 'Buttons & UI',
    items: [
      {
        name: 'Primary Button',
        classes: themeStyles.buttonPrimary,
        sampleText: 'Generate another HS Code',
        elementType: 'button',
      },
      {
        name: 'Normal Button',
        classes: themeStyles.buttonNormal,
        sampleText: 'Upload Files',
        elementType: 'button',
      },
      {
        name: 'Badge / Tag',
        classes: themeStyles.badge,
        sampleText: 'New Arrival',
        elementType: 'div',
      },
    ],
  },
]

function StyleGuide() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 p-8">
      <div>
        <h1 className="text-secondary text-3xl font-bold tracking-tight">ShipX Design System</h1>
        <p className="text-foreground-500">
          Atomic components and their corresponding utility classes.
        </p>
      </div>

      {styleSystem.map((section, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-xl font-semibold">{section.category}</h2>

          <div className="rounded-md border">
            <table className="w-full caption-bottom text-left text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                  <th className="text-muted-foreground h-12 w-1/2 px-4 text-left align-middle font-medium">
                    Component / Preview
                  </th>
                  <th className="text-muted-foreground h-12 w-1/2 px-4 text-left align-middle font-medium">
                    Tailwind Classes
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {section.items.map((item, itemIdx) => (
                  <StyleRow key={itemIdx} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StyleGuide

function CodeBlock({ classes }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    try {
      // 1. Try the modern API first
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(classes)
      } else {
        throw new Error('Clipboard API unavailable')
      }
    } catch (err) {
      // 2. Fallback for older browsers or non-secure contexts (HTTP)
      const textArea = document.createElement('textarea')
      textArea.value = classes

      // Move textarea out of the viewport so it's not visible
      textArea.style.position = 'fixed'
      textArea.style.left = '-9999px'
      textArea.style.top = '0'

      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()

      try {
        document.execCommand('copy')
      } catch (e) {
        console.error('Copy failed', e)
        return // Stop here if even the fallback fails
      }

      document.body.removeChild(textArea)
    }

    // 3. Update state to show "Copied!"
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative w-full">
      <code className="relative block w-full rounded bg-slate-950 p-4 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold break-words whitespace-normal text-white">
        {classes}
      </code>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 rounded bg-white/10 p-2 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white/20"
        title="Copy classes"
      >
        {copied ? (
          <span className="text-xs">Copied!</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
    </div>
  )
}

function StyleRow({ item }) {
  const Tag = item.elementType || 'div'
  const variationClasses = item.classes2 ? cn(item.classes, item.classes2) : null

  return (
    <>
      <tr
        className={cn(
          'data-[state=selected]:bg-muted transition-colors hover:bg-slate-100/50',
          item.classes2 ? 'border-0' : 'border-b'
        )}
      >
        {/* Column 1: Primary Name & Preview */}
        <td className="p-4 align-middle">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold tracking-wider text-slate-500 uppercase">
              {item.name}
            </span>
            <div className="flex min-h-[60px] items-center rounded-md border border-dashed border-slate-300 bg-white/50 p-4">
              <Tag className={item.classes}>{item.sampleText}</Tag>
            </div>
          </div>
        </td>

        {/* Column 2: Primary Code */}
        <td className="p-4 align-middle">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-slate-400">Default Classes</span>
            <CodeBlock classes={item.classes} />
          </div>
        </td>
      </tr>

      {item.classes2 && variationClasses && (
        <tr className="data-[state=selected]:bg-muted border-b transition-colors hover:bg-slate-100/50">
          {/* Column 1: Variation Name & Preview */}
          <td className="p-4 pt-0 align-middle">
            {' '}
            {/* pt-0 pulls it closer to the row above */}
            <div className="relative flex flex-col gap-2">
              {/* Optional: A visual connector line or divider could go here */}
              <span className="flex items-center gap-2 text-sm font-bold tracking-wider text-slate-500 uppercase">
                <span className="h-px w-4 bg-slate-300"></span> {/* Visual dash */}
                {item.name2 || 'Variation'}
              </span>

              <div className="flex min-h-[60px] items-center rounded-md border border-dashed border-slate-300 bg-white/50 p-4">
                {/* 2. We use the merged 'variationClasses' here */}
                <Tag className={variationClasses}>{item.sampleText2}</Tag>
              </div>
            </div>
          </td>

          {/* Column 2: Variation Code */}
          <td className="p-4 pt-0 align-middle">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-slate-400">Merged Variation Classes</span>
              {/* 3. The code block displays the full merged string so devs can copy-paste easily */}
              <CodeBlock classes={variationClasses} />
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
