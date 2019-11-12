import { attrs } from 'frontj'
import { script } from '../index'

export function LoadJs (path: string): string {
  return script(attrs(`[src="${path}"]`))
}
