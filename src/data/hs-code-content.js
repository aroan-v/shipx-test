const formFields = [
  {
    title: 'Product Description',
    isRequired: true,
    description: 'Provide a detailed description of your product',
    placeholder: "e.g., 'Men's leather dress shoes with rubber soles'.",
    helper: '0/25', // Triggers the "0/25" counter
    type: 'text-area',
    actionButton: false,
  },
  {
    title: 'Intended Use / Function',
    isRequired: false,
    description: 'Describe the primary purpose or application',
    placeholder: "e.g., 'Component for car engines', 'Retail kitchen appliance'.",
    helper: '',
    type: 'text-area',
    actionButton: false,
  },
  {
    title: 'Primary Material(s)',
    isRequired: false,
    description: 'Specify the main materials used in the product',
    placeholder: "e.g., 'Stainless steel', '80% cotton / 20% polyester'.",
    helper: '',
    type: 'text-area',
    actionButton: false,
  },
  {
    title: 'Upload Images or Files/s for more context',
    isRequired: true,
    description: 'Supported files: JPG, PNG, PDF',
    placeholder: '', // File inputs usually don't have text placeholders
    helper: '5MB limit per file · 0/5 files uploaded', // Triggers the "5MB limit..." text
    type: 'upload',
    actionButton: false,
  },
  {
    title: 'Tariff System',
    isRequired: false,
    description: 'Select the applicable tariff system',
    placeholder: '', // File inputs usually don't have text placeholders
    helper: '', // Triggers the "5MB limit..." text
    type: 'tab',
    actionButton: false,
    tabContent: ['USA (HTSUS - 10 digits)', 'Rest of World (HS - 6 digits)'],
  },
]

export const leftInputs = [
  {
    title: 'Product Description',
    isRequired: true,
    description: 'Provide a detailed description of your product',
    placeholder: "e.g., 'Men's leather dress shoes with rubber soles'.",
    helper: '0/25', // Triggers the "0/25" counter
    type: 'text-area',
    actionButton: false,
  },
  {
    title: 'Intended Use / Function',
    isRequired: false,
    description: 'Describe the primary purpose or application',
    placeholder: "e.g., 'Component for car engines', 'Retail kitchen appliance'.",
    helper: '',
    type: 'text-area',
    actionButton: false,
  },
  {
    title: 'Tariff System',
    isRequired: false,
    description: 'Select the applicable tariff system',
    placeholder: '', // File inputs usually don't have text placeholders
    helper: '', // Triggers the "5MB limit..." text
    type: 'tab',
    actionButton: false,
    tabContent: ['USA (HTSUS - 10 digits)', 'Rest of World (HS - 6 digits)'],
  },
]

export const rightInputs = [
  {
    title: 'Primary Material(s)',
    isRequired: false,
    description: 'Specify the main materials used in the product',
    placeholder: "e.g., 'Stainless steel', '80% cotton / 20% polyester'.",
    helper: '',
    type: 'text-area',
    actionButton: false,
  },
  {
    title: 'Upload reference materials',
    isRequired: false,
    description: 'Context files helps the AI generate more accurate results.',
    placeholder: '', // File inputs usually don't have text placeholders
    helper: '5MB limit per file · 0/5 files uploaded', // Triggers the "5MB limit..." text
    type: 'upload',
    actionButton: false,
  },
]

export const resultsContent = [
  {
    title: 'Recommended HS Code',
    description: 'The generated customs code suggested for your product',
  },
  {
    title: 'Confidence Level',
    description:
      'A percentage score indicating how certain the AI is that the recommended code is correct, helping you assess risk',
  },
  {
    title: 'Tariff Hierarchy',
    description: 'Visualizes the structural path from Chapter down to the specific Subheading.',
  },
  {
    title: 'AI Justification',
    description: 'Provides the rationale to ensure transparent results.',
  },
]

export default formFields
