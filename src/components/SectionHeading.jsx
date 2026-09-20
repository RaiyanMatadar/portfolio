export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent-soft)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--text-soft)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
