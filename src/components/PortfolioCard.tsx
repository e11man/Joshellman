import clsx from 'clsx'

type Props = {
  title: string
  client?: string
  tags?: string[]
}

export default function PortfolioCard({ title, client, tags }: Props) {
  return (
    <a
      href="#"
      className={clsx(
        'block border border-border bg-white no-underline',
        'transform transition-transform duration-150 hover:-translate-y-[5px]'
      )}
    >
      <div className="aspect-[16/10] bg-white" />
      <div className="p-4">
        <h3 className="text-lg font-semibold uppercase tracking-[0.05em]">{title}</h3>
        {client && <p className="text-sm text-black/70">{client}</p>}
        {tags && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="text-xs px-2 py-1 border border-border">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  )
}