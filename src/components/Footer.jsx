import { GitBranch, Mail, Globe } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--panel-soft)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 {siteConfig.name}. Built with React and Tailwind CSS.</p>

        <div className="flex items-center gap-4">
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-[var(--accent-soft)]">
            <GitBranch className="h-4 w-4" />
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-[var(--accent-soft)]">
            <Globe className="h-4 w-4" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="transition hover:text-[var(--accent-soft)]">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
