import { useEffect, useState } from 'react'
import { Menu, X, GitBranch, Globe, Mail } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.2, 0.5, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 text-sm font-medium text-[var(--text)]" aria-label="Home">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--ring)] bg-[rgba(216,141,90,0.12)] text-base font-semibold text-[var(--accent-soft)]">
            RM
          </span>
          <span>{siteConfig.name}</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                activeSection === item.href.slice(1)
                  ? 'text-[var(--accent-soft)]'
                  : 'text-[var(--text-soft)] hover:text-[var(--text)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]">
            <GitBranch className="h-4 w-4" />
          </a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]">
            <Globe className="h-4 w-4" />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className="rounded-full border border-[var(--border)] bg-[var(--panel)] p-2 text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[var(--border)] py-3 text-sm text-[var(--text-soft)] last:border-0"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
