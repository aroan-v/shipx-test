const formFields = [
  {
    title: 'Product Description',
    isRequired: true,
    description: 'Provide a detailed description of your product',
    placeholder: "e.g., 'Men's leather dress shoes with rubber soles'.",
    helper: '0/25', // Triggers the "0/25" counter
  },
  {
    title: 'Intended Use / Function',
    isRequired: false,
    description: 'Describe the primary purpose or application',
    placeholder: "e.g., 'Component for car engines', 'Retail kitchen appliance'.",
    helper: '',
  },
  {
    title: 'Primary Material(s)',
    isRequired: false,
    description: 'Specify the main materials used in the product',
    placeholder: "e.g., 'Stainless steel', '80% cotton / 20% polyester'.",
    helper: '',
  },
  {
    title: 'Upload Images or Files/s for more context',
    isRequired: true,
    description: 'Supported files: JPG, PNG, PDF',
    placeholder: '', // File inputs usually don't have text placeholders
    helper: '5MB limit per file · 0/5 files uploaded', // Triggers the "5MB limit..." text
  },
]

export default formFields
