import Button from '../components/Button'
import Section from '../components/Section'

export default function Hero() {
  return (
    <Section id="hero" ariaLabel="Hero">
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-7">
          <h1 className="font-[Poppins] uppercase tracking-[0.05em] text-[clamp(38px,6vw,72px)] font-bold">I build websites that sell.</h1>
          <p className="mt-4 text-[18px]">I design and ship high-converting, no-nonsense websites for brands that want results.</p>
          <div className="mt-8 flex gap-4">
            <a href="#contact"><Button>Work With Me</Button></a>
            <a href="#work"><Button variant="secondary">See My Work</Button></a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="aspect-[4/3] bg-white border border-border" aria-hidden="true" />
        </div>
      </div>
    </Section>
  )
}