import { attrs } from 'frontj'
import { link } from '../index'

export function LoadCss (path: string): string {
  return link(attrs(`[rel="stylesheet"][href="${path}"]`))
}
