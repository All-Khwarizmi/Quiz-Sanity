import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: Request, res: Response) {
   res.status(200).json({ name: 'John Doe' });
}
