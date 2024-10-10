import { Router, Request, Response, NextFunction } from 'express';
import sendContactEmail from '../brevoService';

const router = Router();

router.post('/contact', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const formData = req.body;

  if (!formData.name || !formData.email || !formData.phone) {
    res.status(400).json({ error: 'Name, email, and phone are required.' });
    return;
  }

  try {
    await sendContactEmail(formData);
    res.status(200).json({ message: 'Form submitted successfully, email sent.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error, email not sent.' });
  }
});

export default router;
