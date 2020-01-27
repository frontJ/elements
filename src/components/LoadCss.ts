import { link } from '../index'

export function LoadCss (path: string): string {
  return link.$`[rel="stylesheet"][href="${path}"]`()
}
