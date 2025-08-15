import Section from '../components/Section'
import FadeUp from '../components/FadeUp'

export default function Work() {
  const projects: Array<never> = []
  return (
    <Section id="work" ariaLabel="Work">
      <FadeUp>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[0.05em]">Selected Work</h2>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="mt-2">Handpicked projects with measurable outcomes.</p>
      </FadeUp>
      {projects.length === 0 ? (
        <p className="mt-8 text-black/70">Case studies coming soon.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ... existing code ... */}
        </div>
      )}
    </Section>
  )
}