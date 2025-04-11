/** Resources */
import type { NextApiRequest, NextApiResponse } from 'next';
import { MarvelService } from '@services';

const resources = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {  
  const service = new MarvelService();

  const { query: { section, offset } } = req;

  try {
    const data = await service.getByPath(section as string, offset as string || undefined);

    res.status(200).json(data);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    
    res.status(500).json({ error: errorMessage });
  }
};

export default resources;
