import { NextRequest, NextResponse } from 'next/server';
import { MarvelService } from '@services';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const name = url.searchParams.get('name');
  const section = url.searchParams.get('section');

  const service = new MarvelService();

  try {
    const data = await service.getByName(name as string, section as string);

    return NextResponse.json(data, { status: 200 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
