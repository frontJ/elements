import { isObject, isUndefined } from '../functions'

export function validateMetaComponentArguments (params: unknown, options?: unknown) {
  if (!isObject(params)) {
    throw new Error('params is must be object.')
  }
  if (!isUndefined(options) && !isObject(options)) {
    throw new Error('options is must be object.')
  }
}
