import { Favicon } from '../../components'

describe('Favicon', () => {
  it('href', () => {
    expect(Favicon({
      href: 'URL'
    })).toBe('<link rel="icon" href="URL">')
  })

  it('type and href', () => {
    expect(Favicon({
      type: 'Type',
      href: 'URL'
    })).toBe('<link rel="icon" type="Type" href="URL">')
  })

  it('undefined type', () => {
    expect(Favicon({
      type: undefined,
      href: 'URL'
    })).toBe('<link rel="icon" href="URL">')
  })

  it('invalid params', () => {
    expect(() => {
      Favicon((null as unknown as { href: '' }))
    }).toThrowError(new Error('params is must be object.'))
  })

  it('params without href', () => {
    expect(() => {
      Favicon(({} as unknown as { href: '' }))
    }).toThrowError(new Error('params requires href property.'))
  })

  it('invalid params.type', () => {
    expect(() => {
      Favicon({ type: (null as unknown as ''), href: '' })
    }).toThrowError(new Error('params.type is must be string or undefined.'))
  })

  it('invalid params.href', () => {
    expect(() => {
      Favicon({ href: (null as unknown as '') })
    }).toThrowError(new Error('params.href is must be string.'))
  })
})
