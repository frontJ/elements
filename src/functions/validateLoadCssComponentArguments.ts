import { isString } from '../functions'

export function validateLoadCssComponentArguments (path: unknown) {
  if (!isString(path)) {
    throw new Error('path is must be string.')
  }
}
