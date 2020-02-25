import { link } from '../index'
import { validateFaviconComponentArguments } from '../functions'

interface Params {
  type?: string;
  href: string;
}

export function Favicon (params: Params): string {
  validateFaviconComponentArguments(params)

  const typeAttr = params.type ? `[type="${params.type}"]` : ''
  return link`[rel="icon"]${typeAttr}[href="${params.href}"]`()
}
