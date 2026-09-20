export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
