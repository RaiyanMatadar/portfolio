import { ArrowUpRight, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow-soft)]"
    >
      <div className="relative overflow-hidden border-b border-[var(--border)]">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,19,21,0.85)] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
        </div>

        <p className="text-sm leading-7 text-[var(--text-soft)]">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--panel-soft)] px-2.5 py-1 text-[11px] font-medium text-[var(--text-soft)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2 text-sm text-[var(--text-soft)]">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-medium text-[#181510] transition hover:bg-[var(--accent-soft)]"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Live Preview
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--panel-soft)] px-3 py-2 text-xs font-medium text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
            >
              <GitBranch className="h-3.5 w-3.5" />
              Source Code
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}
