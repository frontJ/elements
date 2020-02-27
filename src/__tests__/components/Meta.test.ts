import { Meta } from '../../components'

describe('Meta', () => {
  it('charset', () => {
    expect(Meta({
      charset: 'UTF-8'
    })).toBe('<meta charset="UTF-8">')
  })

  it('undefined charset', () => {
    expect(Meta({
      charset: undefined
    })).toBe('<meta charset="">')
  })

  it('invalid charset', () => {
    expect(() => {
      Meta({
        charset: (null as unknown as '')
      })
    }).toThrowError(new Error('params.charset is must be string or undefined.'))
  })

  it('title', () => {
    expect(Meta({
      title: 'Title'
    })).toBe('<meta property="og:title" content="Title">')
  })

  it('title (autoOg: false)', () => {
    expect(Meta({
      title: 'Title'
    }, {
      autoOg: false
    })).toBe('')
  })

  it('title (includeTitleElement: true)', () => {
    expect(Meta({
      title: 'Title'
    }, {
      includeTitleElement: true
    })).toBe('<meta property="og:title" content="Title"><title>Title</title>')
  })

  it('title (with ogTitle)', () => {
    expect(Meta({
      title: 'Title',
      ogTitle: 'OgTitle'
    })).toBe('<meta property="og:title" content="OgTitle">')
  })

  it('title (with ogTitle, autoOg: false)', () => {
    expect(Meta({
      title: 'Title',
      ogTitle: 'OgTitle'
    }, {
      autoOg: false
    })).toBe('<meta property="og:title" content="OgTitle">')
  })

  it('title (with ogTitle, includeTitleElement: true)', () => {
    expect(Meta({
      title: 'Title',
      ogTitle: 'OgTitle'
    }, {
      includeTitleElement: true
    })).toBe('<title>Title</title><meta property="og:title" content="OgTitle">')
  })

  it('undefined title', () => {
    expect(Meta({
      title: undefined
    })).toBe('<meta property="og:title" content="">')
  })

  it('undefined title (includeTitleElement: true)', () => {
    expect(Meta({
      title: undefined
    }, {
      includeTitleElement: true
    })).toBe('<meta property="og:title" content=""><title></title>')
  })

  it('invalid title', () => {
    expect(() => {
      Meta({
        title: (null as unknown as '')
      })
    }).toThrowError(new Error('params.title is must be string or undefined.'))
  })

  it('description', () => {
    expect(Meta({
      description: 'Description'
    })).toBe('<meta name="description" content="Description"><meta property="og:description" content="Description">')
  })

  it('description (autoOg: false)', () => {
    expect(Meta({
      description: 'Description'
    }, {
      autoOg: false
    })).toBe('<meta name="description" content="Description">')
  })

  it('description (with ogDescription)', () => {
    expect(Meta({
      description: 'Description',
      ogDescription: 'OgDescription'
    })).toBe('<meta name="description" content="Description"><meta property="og:description" content="OgDescription">')
  })

  it('description (with ogDescription, autoOg: false)', () => {
    expect(Meta({
      description: 'Description',
      ogDescription: 'OgDescription'
    }, {
      autoOg: false
    })).toBe('<meta name="description" content="Description"><meta property="og:description" content="OgDescription">')
  })

  it('undefined description', () => {
    expect(Meta({
      description: undefined
    })).toBe('<meta name="description" content=""><meta property="og:description" content="">')
  })

  it('invalid description', () => {
    expect(() => {
      Meta({
        description: (null as unknown as '')
      })
    }).toThrowError(new Error('params.description is must be string or undefined.'))
  })

  it('viewport', () => {
    expect(Meta({
      viewport: 'width=device-width'
    })).toBe('<meta name="viewport" content="width=device-width">')
  })

  it('undefined viewport', () => {
    expect(Meta({
      viewport: undefined
    })).toBe('<meta name="viewport" content="">')
  })

  it('invalid viewport', () => {
    expect(() => {
      Meta({
        viewport: (null as unknown as '')
      })
    }).toThrowError(new Error('params.viewport is must be string or undefined.'))
  })

  it('refresh', () => {
    expect(Meta({
      refresh: '3'
    })).toBe('<meta http-equiv="refresh" content="3">')
  })

  it('undefined refresh', () => {
    expect(Meta({
      refresh: undefined
    })).toBe('<meta http-equiv="refresh" content="">')
  })

  it('invalid refresh', () => {
    expect(() => {
      Meta({
        refresh: (null as unknown as '')
      })
    }).toThrowError(new Error('params.refresh is must be string or undefined.'))
  })

  it('ogTitle', () => {
    expect(Meta({
      ogTitle: 'OgTitle'
    })).toBe('<meta property="og:title" content="OgTitle">')
  })

  it('undefined ogTitle', () => {
    expect(Meta({
      ogTitle: undefined
    })).toBe('<meta property="og:title" content="">')
  })

  it('invalid ogTitle', () => {
    expect(() => {
      Meta({
        ogTitle: (null as unknown as '')
      })
    }).toThrowError(new Error('params.ogTitle is must be string or undefined.'))
  })

  it('ogDescription', () => {
    expect(Meta({
      ogDescription: 'OgDescription'
    })).toBe('<meta property="og:description" content="OgDescription">')
  })

  it('undefined ogDescription', () => {
    expect(Meta({
      ogDescription: undefined
    })).toBe('<meta property="og:description" content="">')
  })

  it('invalid ogDescription', () => {
    expect(() => {
      Meta({
        ogDescription: (null as unknown as '')
      })
    }).toThrowError(new Error('params.ogDescription is must be string or undefined.'))
  })

  it('ogUrl', () => {
    expect(Meta({
      ogUrl: 'URL'
    })).toBe('<meta property="og:url" content="URL">')
  })

  it('undefined ogUrl', () => {
    expect(Meta({
      ogUrl: undefined
    })).toBe('<meta property="og:url" content="">')
  })

  it('invalid ogUrl', () => {
    expect(() => {
      Meta({
        ogUrl: (null as unknown as '')
      })
    }).toThrowError(new Error('params.ogUrl is must be string or undefined.'))
  })

  it('ogImage', () => {
    expect(Meta({
      ogImage: 'URL'
    })).toBe('<meta property="og:image" content="URL">')
  })

  it('undefined ogImage', () => {
    expect(Meta({
      ogImage: undefined
    })).toBe('<meta property="og:image" content="">')
  })

  it('invalid ogImage', () => {
    expect(() => {
      Meta({
        ogImage: (null as unknown as '')
      })
    }).toThrowError(new Error('params.ogImage is must be string or undefined.'))
  })

  it('ogSiteName', () => {
    expect(Meta({
      ogSiteName: 'SiteName'
    })).toBe('<meta property="og:site_name" content="SiteName">')
  })

  it('undefined ogSiteName', () => {
    expect(Meta({
      ogSiteName: undefined
    })).toBe('<meta property="og:site_name" content="">')
  })

  it('invalid ogSiteName', () => {
    expect(() => {
      Meta({
        ogSiteName: (null as unknown as '')
      })
    }).toThrowError(new Error('params.ogSiteName is must be string or undefined.'))
  })

  it('ogType', () => {
    expect(Meta({
      ogType: 'website'
    })).toBe('<meta property="og:type" content="website">')

    expect(Meta({
      ogType: 'article'
    })).toBe('<meta property="og:type" content="article">')
  })

  it('undefined ogType', () => {
    expect(Meta({
      ogType: undefined
    })).toBe('<meta property="og:type" content="">')
  })

  it('invalid ogType', () => {
    expect(() => {
      Meta({
        ogType: (null as unknown as 'website')
      })
    }).toThrowError(new Error('params.ogType is must be \'website\', \'article\', or undefined.'))
  })

  it('twitterCard', () => {
    expect(Meta({
      twitterCard: 'summary'
    })).toBe('<meta name="twitter:card" content="summary">')

    expect(Meta({
      twitterCard: 'summary_large_image'
    })).toBe('<meta name="twitter:card" content="summary_large_image">')

    expect(Meta({
      twitterCard: 'app'
    })).toBe('<meta name="twitter:card" content="app">')

    expect(Meta({
      twitterCard: 'player'
    })).toBe('<meta name="twitter:card" content="player">')
  })

  it('undefined twitterCard', () => {
    expect(Meta({
      twitterCard: undefined
    })).toBe('<meta name="twitter:card" content="">')
  })

  it('invalid twitterCard', () => {
    expect(() => {
      Meta({
        twitterCard: (null as unknown as 'summary')
      })
    }).toThrowError(new Error('params.twitterCard is must be \'summary\', \'summary_large_image\', \'app\', \'player\' or undefined.'))
  })

  it('twitterSite', () => {
    expect(Meta({
      twitterSite: '@TwitterSite'
    })).toBe('<meta name="twitter:site" content="@TwitterSite">')
  })

  it('undefined twitterSite', () => {
    expect(Meta({
      twitterSite: undefined
    })).toBe('<meta name="twitter:site" content="">')
  })

  it('invalid twitterSite', () => {
    expect(() => {
      Meta({
        twitterSite: (null as unknown as '')
      })
    }).toThrowError(new Error('params.twitterSite is must be string or undefined.'))
  })

  it('twitterCreator', () => {
    expect(Meta({
      twitterCreator: '@TwitterCreator'
    })).toBe('<meta name="twitter:creator" content="@TwitterCreator">')
  })

  it('undefined twitterCreator', () => {
    expect(Meta({
      twitterCreator: undefined
    })).toBe('<meta name="twitter:creator" content="">')
  })

  it('invalid twitterCreator', () => {
    expect(() => {
      Meta({
        twitterCreator: (null as unknown as '')
      })
    }).toThrowError(new Error('params.twitterCreator is must be string or undefined.'))
  })

  it('fbAppId', () => {
    expect(Meta({
      fbAppId: 'FbAppId'
    })).toBe('<meta property="fb:app_id" content="FbAppId">')
  })

  it('undefined fbAppId', () => {
    expect(Meta({
      fbAppId: undefined
    })).toBe('<meta property="fb:app_id" content="">')
  })

  it('invalid fbAppId', () => {
    expect(() => {
      Meta({
        fbAppId: (null as unknown as '')
      })
    }).toThrowError(new Error('params.fbAppId is must be string or undefined.'))
  })

  it('empty params', () => {
    expect(Meta({})).toBe('')
  })

  it('unknown property', () => {
    expect(Meta(({ property: '' } as {}))).toBe('')
  })

  it('undefined options', () => {
    expect(Meta({}, undefined)).toBe('')
  })

  it('invalid params', () => {
    expect(() => {
      Meta((null as unknown as {}))
    }).toThrowError(new Error('params is must be object.'))

    expect(() => {
      Meta((null as unknown as {}), {})
    }).toThrowError(new Error('params is must be object.'))
  })

  it('invalid options', () => {
    expect(() => {
      Meta({}, (null as unknown as {}))
    }).toThrowError(new Error('options is must be object.'))
  })

  it('invalid options.autoOg', () => {
    expect(() => {
      Meta({}, { autoOg: (null as unknown as true) })
    }).toThrowError(new Error('options.autoOg is must be boolean.'))
  })

  it('invalid options.includeTitleElement', () => {
    expect(() => {
      Meta({}, { includeTitleElement: (null as unknown as true) })
    }).toThrowError(new Error('options.includeTitleElement is must be boolean.'))
  })
})
