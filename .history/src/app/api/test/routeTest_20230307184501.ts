import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: Ne) {
  res.status(200).json({ name: 'John Doe' });
}
