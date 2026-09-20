import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  GitBranch,
  Globe,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'
import { siteConfig } from './data/siteConfig'
import { skillGroups } from './data/skills'
import { projects } from './data/projects'

const journeySteps = [
  {
    title: 'Frontend foundations',
    text: 'I build responsive interfaces with semantic HTML, polished CSS, and modern JavaScript patterns that keep UX smooth and maintainable.',
    icon: Code2,
  },
  {
    title: 'Backend systems',
    text: 'I create APIs and server-side logic with Node.js and Express, focusing on clear business flows and maintainable application structure.',
    icon: Briefcase,
  },
  {
    title: 'Data and auth',
    text: 'I work with MongoDB, JWT-based authentication, and secure application patterns to support real product requirements.',
    icon: ShieldCheck,
  },
  {
    title: 'Deployment and iteration',
    text: 'I continuously refine products with a practical workflow: build, test, deploy, and improve based on feedback and usage.',
    icon: Database,
  },
]

const socialLinkItems = [
  { label: 'GitHub', href: siteConfig.githubUrl, icon: GitBranch },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: 'Portfolio', href: '#projects', icon: Globe },
]

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email.'
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please add a short message.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio enquiry from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      const result = await response.json()

      if (result.success !== 'true') {
        throw new Error('Email service rejected the submission')
      }

      setStatus({
        type: 'success',
        message: 'Thanks for reaching out — your message has been sent successfully.',
      })
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again or email me directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />

      <main className="overflow-x-hidden">
        <section id="home" className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 16% 15%, rgba(216,141,90,0.2), transparent 24%), radial-gradient(circle at 82% 12%, rgba(148,170,160,0.14), transparent 20%)',
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-xl lg:max-w-[42rem]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[rgba(216,141,90,0.08)] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--accent-soft)]">
                  Available for work
                </div>

                <h1 className="mt-8 text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
                  Hi, I&apos;m <span className="text-[var(--accent-soft)]">Raiyan Matadar</span>.
                </h1>

                <p className="mt-6 text-xl font-medium text-[var(--text-soft)] sm:text-2xl">
                  Full Stack Web Developer
                </p>

                <p className="mt-5 max-w-lg text-base leading-8 text-[var(--text-soft)] sm:text-lg">
                  {siteConfig.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#181510] transition hover:bg-[var(--accent-soft)]"
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
                  >
                    Contact Me
                  </a>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[transparent] px-5 py-3 text-sm font-medium text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--text)]"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[var(--text-soft)]">
                  {socialLinkItems.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-2 transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[420px]">
                  <div className="absolute -inset-4 rounded-[2rem] bg-[rgba(216,141,90,0.08)] blur-2xl" aria-hidden="true" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--panel)] p-3 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1">
                    <div className="overflow-hidden rounded-[1.4rem] border border-[rgba(255,255,255,0.05)] bg-[var(--panel-soft)]">
                      <img
                        src="/images/profile.png"
                        alt="Raiyan Matadar portrait"
                        className="h-[420px] w-full object-cover object-center transition duration-500 hover:scale-[1.02] sm:h-[500px]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Building practical products from idea to deployment."
            description="I work across the full stack, combining thoughtful interfaces with reliable backend systems so the final product feels polished and works in the real world."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
              <p className="text-base leading-8 text-[var(--text-soft)]">
                {siteConfig.about}
              </p>
              <p className="mt-6 text-base leading-8 text-[var(--text-soft)]">
                My focus is on building web apps that are responsive, maintainable, and grounded in real user needs. I enjoy the full flow of modern product development: understanding the problem, shaping the UI, wiring the API, and keeping the data model structured.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Responsive frontend interfaces',
                'REST API integration',
                'MongoDB-backed data layers',
                'Authentication and authorization',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[1.1rem] border border-[var(--border)] bg-[var(--panel)] p-4 text-[var(--text-soft)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(216,141,90,0.12)] text-[var(--accent-soft)]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-[var(--border)] bg-[var(--panel-soft)] py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="A balanced stack for building full-featured web applications."
              description="I work comfortably across frontend and backend layers, and I keep my focus practical and product-oriented."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-soft)]">
                  <h3 className="mb-4 text-lg font-semibold text-[var(--text)]">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--text-soft)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that reflects frontend and backend capability."
            description="These projects illustrate how I build user-facing interfaces along with the application logic behind them."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-[rgba(216,141,90,0.25)] bg-[rgba(216,141,90,0.06)] p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-soft)]">GitHub</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Code, experiments, and project work.</h3>
              </div>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-[rgba(216,141,90,0.34)] bg-[rgba(216,141,90,0.06)] px-4 py-2.5 text-sm font-medium text-[var(--accent-soft)] transition hover:bg-[rgba(216,141,90,0.12)]"
              >
                Visit GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="journey" className="border-y border-[var(--border)] bg-[var(--panel-soft)] py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Development Journey"
              title="Building capability through practical full-stack development."
              description="My work is shaped by the process of creating more complete products: interface design, backend logic, data management, and the iterative work that keeps systems reliable."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {journeySteps.map(({ title, text, icon: Icon }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--bg)] p-5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(216,141,90,0.1)] text-[var(--accent-soft)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-soft)]">Resume</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">A concise overview of my development work and focus.</h3>
              </div>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#181510] transition hover:bg-[var(--accent-soft)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 pt-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something useful together."
            description="If you’re looking for a developer who can work across the product stack and deliver thoughtful features, I’d be glad to connect."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-6">
              <div className="space-y-5 text-[var(--text-soft)]">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-lg text-[var(--text)] hover:text-[var(--accent-soft)]">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">GitHub</p>
                  <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-lg text-[var(--text)] hover:text-[var(--accent-soft)]">
                    github.com/yourusername
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">LinkedIn</p>
                  <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-lg text-[var(--text)] hover:text-[var(--accent-soft)]">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text-soft)]">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={updateField}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name}</p> : null}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-soft)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={updateField}
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="mt-2 text-sm text-red-400">{errors.email}</p> : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--text-soft)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={updateField}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="mt-2 text-sm text-red-400">{errors.message}</p> : null}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[#181510] transition hover:bg-[var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {status.type !== 'idle' ? (
                  <p
                    className={status.type === 'success' ? 'text-sm text-[var(--accent-soft)]' : 'text-sm text-red-400'}
                    aria-live="polite"
                  >
                    {status.message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
