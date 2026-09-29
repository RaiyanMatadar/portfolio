import { ArrowUpRight, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] shadow-[var(--shadow-soft)]"
    >
      <div className="relative overflow-hidden border-b border-[var(--border)]">
        <img
          src={project.image}
          alt={project.title}
          className="h-36 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,19,21,0.85)] via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-[var(--text)]">
            {project.title}
          </h3>
        </div>

        <p className="text-[13px] leading-5 text-[var(--text-soft)]">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--panel-soft)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-soft)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex whitespace-nowrap items-center gap-1.5 rounded-full bg-[var(--accent)] px-2.5 py-1.5 text-xs font-medium text-[#181510] transition hover:bg-[var(--accent-soft)]"
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
              className="inline-flex whitespace-nowrap items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel-soft)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-soft)] transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
            >
              <GitBranch className="h-3.5 w-3.5" />
              Source Code
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
