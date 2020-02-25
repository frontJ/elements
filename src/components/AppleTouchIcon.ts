import { link } from '../index'
import { validateAppleTouchIconComponentArguments } from '../functions'

interface Params {
  sizes?: string;
  href: string;
}

export function AppleTouchIcon (params: Params): string {
  validateAppleTouchIconComponentArguments(params)

  const sizesAttr = params.sizes ? `[sizes="${params.sizes}"]` : ''
  return link`[rel="apple-touch-icon"]${sizesAttr}[href="${params.href}"]`()
}
