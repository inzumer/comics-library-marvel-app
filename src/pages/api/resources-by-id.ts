/** Resources */
import type { NextApiRequest, NextApiResponse } from 'next';
import { MarvelService } from '@services';

const resourcesById = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {  
  const service = new MarvelService();

  const { query: { section, id } } = req;

  try {
    const data = await service.getById(section as string, id as string);

    res.status(200).json(data);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    
    res.status(500).json({ error: errorMessage });
  }
};

export default resourcesById;
