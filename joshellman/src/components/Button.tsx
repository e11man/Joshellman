import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export default function Button({ variant = 'primary', className, ...props }: Props) {
  const base = 'focus-ring inline-flex items-center justify-center h-[44px] px-[22px] uppercase tracking-[0.05em]'
  const styles = {
    primary:
      'bg-black text-white border border-black transition-colors duration-150 hover:bg-white hover:text-black',
    secondary: 'bg-white text-black border border-black transition-colors duration-150 hover:bg-black hover:text-white',
  }
  return <button className={clsx(base, styles[variant], className)} {...props} />
}