import { useEffect, useRef } from 'react'

type Props = { isOpen: boolean; onClose: () => void; titleId: string; children: React.ReactNode }

export default function Modal({ isOpen, onClose, titleId, children }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', onKey)
      dialogRef.current?.focus()
    }
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog" aria-labelledby={titleId}>
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl mt-24 bg-white border border-border" tabIndex={-1} ref={dialogRef}>
        {children}
      </div>
    </div>
  )
}