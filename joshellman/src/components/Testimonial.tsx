type Props = { quote: string; author: string; title?: string }

export default function Testimonial({ quote, author, title }: Props) {
  return (
    <figure className="border border-border p-6 bg-white">
      <blockquote className="text-lg">“{quote}”</blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-medium">{author}</span>
        {title ? <span className="text-black/70">, {title}</span> : null}
      </figcaption>
    </figure>
  )
}