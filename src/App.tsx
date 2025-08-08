import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Work from './sections/Work'
import Process from './sections/Process'
import Testimonials from './sections/Testimonials'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="font-[Inter] bg-white text-black">
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 py-12 flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4">
              {[
                { href: '#work', label: 'Work' },
                { href: '#process', label: 'Process' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:underline">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="text-sm">
            <a href="#" className="underline">Privacy Policy</a> · <a href="#" className="underline">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
