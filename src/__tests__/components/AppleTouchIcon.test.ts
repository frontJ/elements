import { AppleTouchIcon } from '../../components'

describe('AppleTouchIcon', () => {
  it('href', () => {
    expect(AppleTouchIcon({
      href: 'URL'
    })).toBe('<link rel="apple-touch-icon" href="URL">')
  })

  it('sizes and href', () => {
    expect(AppleTouchIcon({
      sizes: '180x180',
      href: 'URL'
    })).toBe('<link rel="apple-touch-icon" sizes="180x180" href="URL">')
  })

  it('undefined sizes', () => {
    expect(AppleTouchIcon({
      sizes: undefined,
      href: 'URL'
    })).toBe('<link rel="apple-touch-icon" href="URL">')
  })

  it('invalid params', () => {
    expect(() => {
      AppleTouchIcon((null as unknown as { href: '' }))
    }).toThrowError(new Error('params is must be object.'))
  })

  it('params without href', () => {
    expect(() => {
      AppleTouchIcon(({} as unknown as { href: '' }))
    }).toThrowError(new Error('params requires href property.'))
  })

  it('invalid params.sizes', () => {
    expect(() => {
      AppleTouchIcon({ sizes: (null as unknown as ''), href: '' })
    }).toThrowError(new Error('params.sizes is must be string or undefined.'))
  })

  it('invalid params.href', () => {
    expect(() => {
      AppleTouchIcon({ href: (null as unknown as '') })
    }).toThrowError(new Error('params.href is must be string.'))
  })
})
