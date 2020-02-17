import { link } from '../index'

interface Params {
  type?: string;
  href: string;
}

export function Favicon (params: Params): string {
  const typeAttr = params.type ? `[type="${params.type}"]` : ''
  return link.$`[rel="icon"]${typeAttr}[href="${params.href}"]`()
}
