import { isString } from '../functions'

export function validateLoadJsComponentArguments (path: unknown) {
  if (!isString(path)) {
    throw new Error('path is must be string.')
  }
}
