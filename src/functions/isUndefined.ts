export function isUndefined (arg: unknown): arg is undefined {
  return (typeof arg === 'undefined')
}
