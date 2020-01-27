import { script } from '../index'

export function LoadJs (path: string): string {
  return script.$`[src="${path}"]`()
}
