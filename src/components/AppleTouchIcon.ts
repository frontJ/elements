import { link } from '../index'

interface Params {
  sizes?: string;
  href: string;
}

export function AppleTouchIcon (params: Params): string {
  const sizesAttr = params.sizes ? `[sizes="${params.sizes}"]` : ''
  return link`[rel="apple-touch-icon"]${sizesAttr}[href="${params.href}"]`()
}
