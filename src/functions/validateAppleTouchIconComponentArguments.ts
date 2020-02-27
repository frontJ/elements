import { hasOwnProperty, isObject, isString, isUndefined } from '../functions'

export function validateAppleTouchIconComponentArguments (params: unknown) {
  if (!isObject(params)) {
    throw new Error('params is must be object.')
  }
  if (!hasOwnProperty(params, 'href')) {
    throw new Error('params requires href property.')
  }
  if (
    hasOwnProperty(params, 'sizes') &&
    !isString((params as { sizes: unknown }).sizes) &&
    !isUndefined((params as { sizes: unknown }).sizes)
  ) {
    throw new Error('params.sizes is must be string or undefined.')
  }
  if (!isString((params as { href: unknown }).href)) {
    throw new Error('params.href is must be string.')
  }
}
