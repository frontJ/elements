import { hasOwnProperty, isObject } from '../functions'

export function validateAppleTouchIconComponentArguments (params: unknown) {
  if (!isObject(params)) {
    throw new Error('params is must be object.')
  }
  if (!hasOwnProperty(params, 'href')) {
    throw new Error('params requires `href` property.')
  }
}
