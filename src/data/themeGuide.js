export const themeGuide = {
  // Typography - Headings
  pageTitle: 'text-4xl font-extrabold tracking-tight',
  pageTitleAccent: 'text-secondary',

  sectionHeading: 'text-3xl font-semibold tracking-tight text-foreground',
  sectionHeadingAccent: 'text-secondary',

  // Typography - Body
  sectionDescription: 'text-foreground text-base',
  bodyText: 'text-foreground text-base',

  // Form / Input Elements
  inputHeading: 'text-foreground text-base leading-tight font-semibold',
  inputDescription: 'text-muted-foreground text-sm leading-tight',
  inputPlaceholder:
    'placeholder:text-placeholder text-placeholder italic text-base placeholder:italic md:text-sm',

  // Call to Action (CTA)
  ctaHeading: 'text-2xl font-semibold tracking-tight leading-none',
  ctaDescription: 'text-base leading-tight',

  // Footer
  footerBody: 'text-sm leading-none',
  footerHeading: 'text-base font-bold text-secondary',
  footerItem: 'text-sm text-foreground',

  // Buttons & UI
  // Note: These often need base button classes + variant classes
  buttonPrimary:
    'rounded-md text-sm font-medium mainButton inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 min-h-12 px-4 py-2 has-[>svg]:px-3',
  buttonNormal: 'bg-gray-200 text-foreground hover:bg-violet-300/70 h-9 px-4 py-2 rounded-md',

  badge:
    'text-secondary flex items-center gap-1 rounded-md bg-violet-100 px-4 py-2 text-sm font-bold',
}
