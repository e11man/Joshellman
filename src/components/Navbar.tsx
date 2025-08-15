import { motion, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const { scrollY } = useScroll()

  const height = useTransform(scrollY, [0, 150], [100, 60], { clamp: true })
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.85], { clamp: true })
  const fontSize = useTransform(scrollY, [0, 150], [16, 14], { clamp: true })

  return (
    <motion.header
      role="banner"
      className="sticky top-0 z-50 bg-white border-b border-border"
      style={{ height }}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-full flex items-center justify-between">
        <motion.a href="#hero" className="flex items-center gap-3" style={{ scale: logoScale }}>
          <div className="w-8 h-8 bg-black" aria-hidden="true" />
          <span className="sr-only">Josh Ellman</span>
        </motion.a>
        <nav aria-label="Primary" className="h-full">
          <ul className="flex items-center gap-6 h-full">
            {[
              { href: '#hero', label: 'Home' },
              { href: '#work', label: 'Work' },
              { href: '#process', label: 'Process' },
              { href: '#about', label: 'About' },
            ].map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className="text-black hover:underline focus-ring"
                  style={{ fontSize }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
            <li>
              <motion.a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center h-[44px] px-[22px] border border-black bg-black text-white transition-colors duration-150 hover:bg-white hover:text-black"
                style={{ fontSize }}
              >
                Work With Me
              </motion.a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}