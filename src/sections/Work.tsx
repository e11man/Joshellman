import Section from '../components/Section'
import PortfolioCard from '../components/PortfolioCard'
import FadeUp from '../components/FadeUp'

export default function Work() {
  return (
    <Section id="work" ariaLabel="Work">
      <FadeUp>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[0.05em]">Selected Work</h2>
      </FadeUp>
      <FadeUp delay={0.12}>
        <p className="mt-2">Handpicked projects with measurable outcomes.</p>
      </FadeUp>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[0,1,2].map((i) => (
          <FadeUp key={i} delay={0.12 * (i + 1)}>
            {i === 0 && <PortfolioCard title="Client A" client="SaaS" tags={["Design","Dev"]} />}
            {i === 1 && <PortfolioCard title="Client B" client="Ecom" tags={["Dev","SEO"]} />}
            {i === 2 && <PortfolioCard title="Client C" client="Fintech" tags={["Design","Strategy"]} />}
          </FadeUp>
        ))}
      </div>
    </Section>
  )
}