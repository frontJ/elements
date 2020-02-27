import { LoadCss } from '../../components'

describe('LoadCss', () => {
  it('path', () => {
    expect(LoadCss('URL')).toBe('<link rel="stylesheet" href="URL">')
  })

  it('invalid path', () => {
    expect(() => {
      LoadCss((null as unknown as ''))
    }).toThrowError(new Error('path is must be string.'))
  })
})
