import { meta, title } from '../index'
import { validateMetaComponentArguments } from '../functions'

interface Params {
  charset?: string;
  title?: string;
  description?: string;
  viewport?: string;
  refresh?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogSiteName?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  fbAppId?: string;
}

interface Options {
  autoOg?: boolean;
  includeTitleElement?: boolean;
}

export function Meta (params: Params, options?: Options): string {
  validateMetaComponentArguments(params, options)

  const _ogTitle = params.ogTitle
  const _ogDescription = params.ogDescription
  const _autoOg = options?.autoOg ?? true
  const _includeTitleElement = options?.includeTitleElement ?? false

  return (Object.keys(params) as (keyof Params)[]).map((prop) => {
    const param = params[prop] ?? ''

    if (prop === 'charset') {
      return meta`[charset="${param}"]`()
    }

    if (prop === 'title') {
      let metaStr = ''
      if (_autoOg && _ogTitle === undefined) {
        metaStr += meta`[property="og:title"][content="${param}"]`()
      }
      if (_includeTitleElement) {
        metaStr += title(param)
      }
      return metaStr
    }

    if (prop === 'description') {
      let metaStr = meta`[name="description"][content="${param}"]`()
      if (_autoOg && _ogDescription === undefined) {
        metaStr += meta`[property="og:description"][content="${param}"]`()
      }
      return metaStr
    }

    if (prop === 'viewport') {
      return meta`[name="viewport"][content="${param}"]`()
    }

    if (prop === 'refresh') {
      return meta`[http-equiv="refresh"][content="${param}"]`()
    }

    if (prop === 'ogTitle') {
      return meta`[property="og:title"][content="${param}"]`()
    }

    if (prop === 'ogDescription') {
      return meta`[property="og:description"][content="${param}"]`()
    }

    if (prop === 'ogUrl') {
      return meta`[property="og:url"][content="${param}"]`()
    }

    if (prop === 'ogImage') {
      return meta`[property="og:image"][content="${param}"]`()
    }

    if (prop === 'ogSiteName') {
      return meta`[property="og:site_name"][content="${param}"]`()
    }

    if (prop === 'ogType') {
      return meta`[property="og:type"][content="${param}"]`()
    }

    if (prop === 'twitterCard') {
      return meta`[name="twitter:card"][content="${param}"]`()
    }

    if (prop === 'twitterSite') {
      return meta`[name="twitter:site"][content="${param}"]`()
    }

    if (prop === 'twitterCreator') {
      return meta`[name="twitter:creator"][content="${param}"]`()
    }

    if (prop === 'fbAppId') {
      return meta`[property="fb:app_id"][content="${param}"]`()
    }

    return ''
  }).join('')
}
