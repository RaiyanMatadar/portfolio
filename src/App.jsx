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

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields and try again.' })
      setErrors(nextErrors)
      return
    }

    setStatus({
      type: 'success',
      message: 'Thanks for reaching out — your message is ready to send via your preferred email client.',
    })
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_30%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                Available for work
              </div>

              <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                Hi, I&apos;m <span className="text-emerald-300">Raiyan Matadar</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-medium text-slate-300 sm:text-2xl">
                Full Stack Web Developer
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {siteConfig.intro}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  Contact Me
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-emerald-400 hover:text-emerald-300"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                {socialLinkItems.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 transition hover:border-emerald-400 hover:text-emerald-300"
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="Building practical products from idea to deployment."
            description="I work across the full stack, combining thoughtful interfaces with reliable backend systems so the final product feels polished and works in the real world."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">
              <p className="text-base leading-8 text-slate-300">
                {siteConfig.about}
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300">
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
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-slate-800 bg-slate-900/40 py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Skills"
              title="A balanced stack for building full-featured web applications."
              description="I work comfortably across frontend and backend layers, and I keep my focus practical and product-oriented."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5 shadow-glow">
                  <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200"
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

          <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">GitHub</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">Code, experiments, and project work.</h3>
              </div>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-300 transition hover:bg-emerald-500/20"
              >
                Visit GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="journey" className="border-y border-slate-800 bg-slate-900/40 py-20">
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
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">Resume</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">A concise overview of my development work and focus.</h3>
              </div>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
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
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
              <div className="space-y-5 text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-lg text-white hover:text-emerald-300">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">GitHub</p>
                  <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-lg text-white hover:text-emerald-300">
                    github.com/yourusername
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">LinkedIn</p>
                  <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-lg text-white hover:text-emerald-300">
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={updateField}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-slate-100 outline-none transition focus:border-emerald-400"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name}</p> : null}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={updateField}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-slate-100 outline-none transition focus:border-emerald-400"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="mt-2 text-sm text-red-400">{errors.email}</p> : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={updateField}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-slate-100 outline-none transition focus:border-emerald-400"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <p className="mt-2 text-sm text-red-400">{errors.message}</p> : null}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
                >
                  Send Message
                </button>

                {status.type !== 'idle' ? (
                  <p
                    className={status.type === 'success' ? 'text-sm text-emerald-300' : 'text-sm text-red-400'}
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
