import { LoadJs } from '../../components'

describe('LoadJs', () => {
  it('path', () => {
    expect(LoadJs('URL')).toBe('<script src="URL"></script>')
  })

  it('invalid path', () => {
    expect(() => {
      LoadJs((null as unknown as ''))
    }).toThrowError(new Error('path is must be string.'))
  })
})
