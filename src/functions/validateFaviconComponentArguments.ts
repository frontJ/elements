import { hasOwnProperty, isObject, isString, isUndefined } from '../functions'

export function validateFaviconComponentArguments (params: unknown) {
  if (!isObject(params)) {
    throw new Error('params is must be object.')
  }
  if (!hasOwnProperty(params, 'href')) {
    throw new Error('params requires href property.')
  }
  if (
    hasOwnProperty(params, 'type') &&
    !isString((params as { type: unknown }).type) &&
    !isUndefined((params as { type: unknown }).type)
  ) {
    throw new Error('params.type is must be string or undefined.')
  }
  if (!isString((params as { href: unknown }).href)) {
    throw new Error('params.href is must be string.')
  }
}
