import type { Source } from '~/types'
import exodus from '~/constants/exodus'

export default defineEventHandler((event) => {
  const chapter = exodus.filter(
    (s) => s.chapter.toString() === getRouterParam(event, 'chapter')
  )

  const nasb20 = chapter.filter((s) => s.source === 'nasb20')
  const amp = chapter.filter((s) => s.source === 'amp')
  const esv = chapter.filter((s) => s.source === 'esv')
  const kjv = chapter.filter((s) => s.source === 'kjv')
  const nkjv = chapter.filter((s) => s.source === 'nkjv')
  const jps85 = chapter.filter((s) => s.source === 'jps85')
  const csb = chapter.filter((s) => s.source === 'csb')
  const niv = chapter.filter((s) => s.source === 'niv')
  const nlt = chapter.filter((s) => s.source === 'nlt')
  const heb = chapter.filter((s) => s.source === 'heb')
  const lxx = chapter.filter((s) => s.source === 'lxx')

  console.log(nasb20.length)

  const scripture = (verse: number) => {
    return {
      nasb20: nasb20.find((s) => s.verse === verse)?.text,
      amp: amp.find((s) => s.verse === verse)?.text,
      esv: esv.find((s) => s.verse === verse)?.text,
      kjv: kjv.find((s) => s.verse === verse)?.text,
      nkjv: nkjv.find((s) => s.verse === verse)?.text,
      jps85: jps85.find((s) => s.verse === verse)?.text,
      csb: csb.find((s) => s.verse === verse)?.text,
      niv: niv.find((s) => s.verse === verse)?.text,
      nlt: nlt.find((s) => s.verse === verse)?.text,
      heb: heb.find((s) => s.verse === verse)?.text,
      lxx: lxx.find((s) => s.verse === verse)?.text,
    } as Record<Source, string>
  }

  const data: Record<number, Record<Source, string>> = {}

  for (let verse = 1; verse <= niv.length; verse++) {
    data[verse] = scripture(verse)
  }

  return data
})
