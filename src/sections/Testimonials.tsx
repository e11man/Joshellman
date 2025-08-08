import Section from '../components/Section'
import Testimonial from '../components/Testimonial'

export default function Testimonials() {
  return (
    <Section id="testimonials" ariaLabel="Testimonials">
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[0.05em]">Testimonials</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Testimonial quote="Josh took our messy brief and delivered a site that finally converts." author="Client Name" title="Founder, Company" />
      </div>
    </Section>
  )
}