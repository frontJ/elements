import { hasOwnProperty, isBoolean, isObject, isString, isUndefined } from '../functions'

export function validateMetaComponentArguments (params: unknown, options?: unknown) {
  if (!isObject(params)) {
    throw new Error('params is must be object.')
  }
  if (
    hasOwnProperty(params, 'charset') &&
    !isString((params as { charset: unknown }).charset) &&
    !isUndefined((params as { charset: unknown }).charset)
  ) {
    throw new Error('params.charset is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'title') &&
    !isString((params as { title: unknown }).title) &&
    !isUndefined((params as { title: unknown }).title)
  ) {
    throw new Error('params.title is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'description') &&
    !isString((params as { description: unknown }).description) &&
    !isUndefined((params as { description: unknown }).description)
  ) {
    throw new Error('params.description is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'viewport') &&
    !isString((params as { viewport: unknown }).viewport) &&
    !isUndefined((params as { viewport: unknown }).viewport)
  ) {
    throw new Error('params.viewport is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'refresh') &&
    !isString((params as { refresh: unknown }).refresh) &&
    !isUndefined((params as { refresh: unknown }).refresh)
  ) {
    throw new Error('params.refresh is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'ogTitle') &&
    !isString((params as { ogTitle: unknown }).ogTitle) &&
    !isUndefined((params as { ogTitle: unknown }).ogTitle)
  ) {
    throw new Error('params.ogTitle is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'ogDescription') &&
    !isString((params as { ogDescription: unknown }).ogDescription) &&
    !isUndefined((params as { ogDescription: unknown }).ogDescription)
  ) {
    throw new Error('params.ogDescription is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'ogUrl') &&
    !isString((params as { ogUrl: unknown }).ogUrl) &&
    !isUndefined((params as { ogUrl: unknown }).ogUrl)
  ) {
    throw new Error('params.ogUrl is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'ogImage') &&
    !isString((params as { ogImage: unknown }).ogImage) &&
    !isUndefined((params as { ogImage: unknown }).ogImage)
  ) {
    throw new Error('params.ogImage is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'ogSiteName') &&
    !isString((params as { ogSiteName: unknown }).ogSiteName) &&
    !isUndefined((params as { ogSiteName: unknown }).ogSiteName)
  ) {
    throw new Error('params.ogSiteName is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'ogType') &&
    (params as { ogType: unknown }).ogType !== 'website' &&
    (params as { ogType: unknown }).ogType !== 'article' &&
    !isUndefined((params as { ogType: unknown }).ogType)
  ) {
    throw new Error('params.ogType is must be \'website\', \'article\', or undefined.')
  }
  if (
    hasOwnProperty(params, 'twitterCard') &&
    (params as { twitterCard: unknown }).twitterCard !== 'summary' &&
    (params as { twitterCard: unknown }).twitterCard !== 'summary_large_image' &&
    (params as { twitterCard: unknown }).twitterCard !== 'app' &&
    (params as { twitterCard: unknown }).twitterCard !== 'player' &&
    !isUndefined((params as { twitterCard: unknown }).twitterCard)
  ) {
    throw new Error('params.twitterCard is must be \'summary\', \'summary_large_image\', \'app\', \'player\' or undefined.')
  }
  if (
    hasOwnProperty(params, 'twitterSite') &&
    !isString((params as { twitterSite: unknown }).twitterSite) &&
    !isUndefined((params as { twitterSite: unknown }).twitterSite)
  ) {
    throw new Error('params.twitterSite is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'twitterCreator') &&
    !isString((params as { twitterCreator: unknown }).twitterCreator) &&
    !isUndefined((params as { twitterCreator: unknown }).twitterCreator)
  ) {
    throw new Error('params.twitterCreator is must be string or undefined.')
  }
  if (
    hasOwnProperty(params, 'fbAppId') &&
    !isString((params as { fbAppId: unknown }).fbAppId) &&
    !isUndefined((params as { fbAppId: unknown }).fbAppId)
  ) {
    throw new Error('params.fbAppId is must be string or undefined.')
  }
  if (!isUndefined(options) && !isObject(options)) {
    throw new Error('options is must be object.')
  }
  if (hasOwnProperty(options, 'autoOg') && !isBoolean((options as { autoOg: unknown }).autoOg)) {
    throw new Error('options.autoOg is must be boolean.')
  }
  if (hasOwnProperty(options, 'includeTitleElement') && !isBoolean((options as { includeTitleElement: unknown }).includeTitleElement)) {
    throw new Error('options.includeTitleElement is must be boolean.')
  }
}
