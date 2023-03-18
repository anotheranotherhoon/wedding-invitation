import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(400).json({ error: "Invalid HTTP method. Only POST method is allowed." });
  }
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  try {
    await res.revalidate('/guestBook')
    return res.json({ revalidated: true })

  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}