import Section from '../components/Section'

export default function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact">
      <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold uppercase tracking-[0.05em]">Let’s build your website.</h2>
      <form method="POST" action="/api/contact" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" aria-live="polite">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input id="name" name="name" required className="w-full border border-black px-3 py-3" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="w-full border border-black px-3 py-3" />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="budget">Budget</label>
          <select id="budget" name="budget" className="w-full border border-black px-3 py-3">
            <option>$3–5k</option>
            <option>$5–10k</option>
            <option>$10–25k</option>
            <option>$25k+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="timeline">Timeline</label>
          <select id="timeline" name="timeline" className="w-full border border-black px-3 py-3">
            <option>2–4 weeks</option>
            <option>4–8 weeks</option>
            <option>Flexible</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1" htmlFor="details">Project details</label>
          <textarea id="details" name="details" required className="w-full border border-black px-3 py-3 min-h-[140px]" />
          <p className="text-sm mt-2">By submitting, you agree to our <a href="#" className="underline">Privacy Policy</a>.</p>
        </div>
        <div className="md:col-span-2">
          <button className="focus-ring inline-flex items-center justify-center h-[44px] px-[22px] border border-black bg-black text-white transition-colors duration-150 hover:bg-white hover:text-black">
            Send
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm">Prefer email? <a href="mailto:hello@joshellman.com" className="underline">hello@joshellman.com</a></p>
    </Section>
  )
}