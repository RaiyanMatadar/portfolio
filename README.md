# Raiyan Matadar Portfolio

A modern dark portfolio for a Full Stack Web Developer built with React, Vite, and Tailwind CSS.

## Features

- responsive dark developer portfolio
- sticky navigation with mobile menu
- hero, about, skills, projects, journey, resume, and contact sections
- reusable content-driven project and skill data
- accessible form validation and polished motion
- SEO metadata and favicon setup
- environment-based configuration for contact links and resume

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Local setup

1. Install dependencies:
   npm install
2. Start the dev server:
   npm run dev
3. Build for production:
   npm run build

## Environment variables

Create a .env file based on .env.example and update the values:

VITE_CONTACT_EMAIL=your.email@example.com
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://www.linkedin.com/in/yourusername
VITE_RESUME_URL=/resume.txt

## Project structure

- src/components — reusable UI pieces
- src/data — content and config for skills, projects, and social links
- src/App.jsx — page composition and main sections
- src/index.css — Tailwind layers and theme styling
- public/resume.txt — placeholder resume file

## Notes

- Project and skill content are centralized in data files so they are easy to update.
- Social and resume links are configured in one place to keep the site maintainable.
- Replace placeholder values and links with real portfolio data before publishing.
