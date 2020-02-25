import { script } from '../index'
import { validateLoadJsComponentArguments } from '../functions'

export function LoadJs (path: string): string {
  validateLoadJsComponentArguments(path)

  return script`[src="${path}"]`()
}
