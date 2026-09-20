```js
export const projects = [
  {
    title: 'Chef Claude',
    description:
      'An AI-powered recipe application that generates recipes from user-provided ingredients using React, the Groq API, and LLaMA 3.3-70B.',
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'React 19',
      'Vite',
      'Groq API',
      'LLaMA 3.3-70B',
      'React-Markdown',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    features: [
      'AI-powered recipe generation from user-provided ingredients',
      'Reusable React components for application structure',
      'React Hooks for ingredient management and application state',
      'Loading states and conditional rendering',
      'Formatted AI responses using React-Markdown',
      'Environment variables for secure API configuration',
      'Vite configuration for fast development and production builds',
    ],
  },

  {
    title: 'Meme Generator',
    description:
      'A responsive React web application that uses the Imgflip API to provide access to more than 1,000 meme templates and generate custom memes.',
    image:
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'React 19',
      'Vite',
      'Imgflip API',
      'JavaScript',
      'CSS3',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    features: [
      'Access to 1,000+ meme templates through the Imgflip API',
      'Dynamic text and template selection',
      'Random meme image generation',
      'API data fetching with useEffect',
      'State management with useState',
      'Reusable React components',
      'Responsive mobile-friendly layouts',
      'Custom meme typography and responsive CSS styling',
      'ESLint for development and code quality',
    ],
  },

  {
    title: 'Payroll Management System',
    description:
      'A full-stack payroll management application for managing companies, employees, salary templates, payslips, payroll calculations, and payroll history.',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'JWT',
      'PDFKit',
      'Archiver',
      'Multer',
      'Cloudinary',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    features: [
      'Company and employee management',
      'Salary template and payslip management',
      'Protected REST APIs using Node.js and Express.js',
      'MongoDB and Mongoose for database management',
      'JWT-based administrator authentication',
      'Dynamic earnings, deductions, and net salary calculations',
      'Salary amounts converted into words',
      'PDF payslip generation using PDFKit',
      'Bulk payslip ZIP exports using Archiver',
      'Company logo uploads using Multer and Cloudinary',
      'Reusable React components for administrative interfaces',
      'Responsive interfaces for companies, employees, templates, and payslips',
    ],
  },
]
```
