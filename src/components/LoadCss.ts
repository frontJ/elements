import { link } from '../index'
import { validateLoadCssComponentArguments } from '../functions'

export function LoadCss (path: string): string {
  validateLoadCssComponentArguments(path)

  return link`[rel="stylesheet"][href="${path}"]`()
}
