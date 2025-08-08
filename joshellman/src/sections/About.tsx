import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" ariaLabel="About">
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[0.05em]">About</h2>
          <p className="mt-4">I'm Josh Ellman. I design and ship conversion-first websites with clean code and clean results.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {['React','Vite','Tailwind','Framer Motion','SEO','Analytics','Accessibility'].map((s) => (
              <li key={s} className="text-sm px-3 py-1 border border-border">{s}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="aspect-[4/5] border border-border bg-white" aria-label="Portrait placeholder" />
        </div>
      </div>
    </Section>
  )
}