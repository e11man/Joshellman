import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{ id: string; ariaLabel?: string; className?: string }>

export default function Section({ id, ariaLabel, className, children }: SectionProps) {
  return (
    <section id={id} aria-label={ariaLabel} className={className}>
      <div className="mx-auto max-w-[1200px] px-6 py-[120px]">{children}</div>
    </section>
  )
}