import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' })
  }
  const { name, email, budget, timeline, details } = req.body || {}
  if (!name || !email || !details) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  // TODO: integrate email provider or Formspree webhook
  return res.status(200).json({ ok: true })
}