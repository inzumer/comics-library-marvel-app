/** Resources */
import { NextRequest, NextResponse } from 'next/server'
import { MarvelService } from '@services'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const section = url.searchParams.get('section')
  const offset = url.searchParams.get('offset') || undefined

  const service = new MarvelService()

  try {
    if (!section) {
      return NextResponse.json({ error: 'Missing section parameter' }, { status: 400 })
    }

    const data = await service.getByPath(section, offset)
    return NextResponse.json(data, { status: 200 })
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
