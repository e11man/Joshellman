import Section from '../components/Section'

export default function Process() {
  const steps = [
    { title: 'Discovery', desc: 'Goals, audience, messaging, sitemap.' },
    { title: 'Design', desc: 'Wireframes → hi-fi comps → components.' },
    { title: 'Deploy', desc: 'Build, optimize, launch, measure.' },
  ]
  return (
    <Section id="process" ariaLabel="Process">
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[0.05em]">Process</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <div key={s.title} className="border border-border p-6 bg-white">
            <h3 className="text-[24px] font-semibold uppercase tracking-[0.05em]">{s.title}</h3>
            <p className="mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}