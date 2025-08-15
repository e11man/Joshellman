import { motion, useReducedMotion } from 'framer-motion'

type Props = { children: React.ReactNode; delay?: number }

export default function FadeUp({ children, delay = 0 }: Props) {
  const prefersReduced = useReducedMotion()

  const variants = prefersReduced
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2, delay } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut', delay } },
      }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -10% 0px' }}
      variants={variants}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}