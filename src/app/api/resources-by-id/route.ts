/** Resources */
import { NextRequest, NextResponse } from 'next/server'
import { MarvelService } from '@services'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const section = url.searchParams.get('section')
  const id = url.searchParams.get('id')

  const service = new MarvelService()

  try {
    if (!section || !id) {
      return NextResponse.json({ error: 'Missing section or id parameter' }, { status: 400 });
    }

    const data = await service.getById(section, id)
    return NextResponse.json(data, { status: 200 })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
