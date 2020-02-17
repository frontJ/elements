# @frontj/elements

[frontJ](https://github.com/frontJ/frontJ)の`createElement`関数を様々なHTML要素に適用したものをエクスポートしたパッケージです。<br>
いくつかの組み込みコンポーネントも含まれています。

## Install

```bash
npm install -D @frontj/elements
```

## Example

```javascript
import { writeFileSync } from 'fs'
import {
  html,
  head,
  title,
  body,
  h1,
  p,
  br,
  input,
  Meta,
  Favicon,
  LoadCss
} from '@frontj/elements'
import { build } from '@frontj/builder'

const text = (...contents) => p.$`.text`(
  ...contents
)

const contents = html(
  head(
    title('frontJ example.'),
    Meta({ description: 'Description' }),
    Favicon({ href: '/favicon.ico' }),
    LoadCss('style.css')
  ),
  body(
    h1.$`.heading`('Hello!'),
    text('foo', br(), 'bar'),
    input.$`[type="checkbox"][checked]`()
  )
)

build({
  routes: {
    '/': contents
  }
})
```

HTML(整形後):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>frontJ example.</title>
    <meta name="description" content="Description">
    <meta property="og:description" content="Description">
    <link rel="icon" href="/favicon.ico">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 class="heading">Hello!</h1>
    <p class="text">foo<br>bar</p>
    <input type="checkbox" checked>
  </body>
</html>
```

## Documentation

### Components

#### `AppleTouchIcon`

apple-touch-iconの設定がされた`link`タグを返します。

```typescript
AppleTouchIcon(params: Params): string
```

| 引数 | 説明 |
| --- | --- |
| params | 返す`link`タグの内容となるオブジェクト。設定項目は下記に記載しています。 |

`params`の設定項目:

| 項目 | 説明 |
| --- | --- |
| sizes | 省略可能で、`sizes`属性の値を文字列で設定します。 |
| href | `href`属性の値を文字列で設定します。 |

```typescript
AppleTouchIcon({ sizes: '180x180', href: '/apple-touch-icon.png' })
/*
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
*/

AppleTouchIcon({ href: '/apple-touch-icon.png' })
/*
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
*/
```

#### `Favicon`

faviconの設定がされた`link`タグを返します。

```typescript
Favicon(params: Params): string
```

| 引数 | 説明 |
| --- | --- |
| params | 返す`link`タグの内容となるオブジェクト。設定項目は下記に記載しています。 |

`params`の設定項目:

| 項目 | 説明 |
| --- | --- |
| type | 省略可能で、`type`属性の値を文字列で設定します。 |
| href | `href`属性の値を文字列で設定します。 |

```typescript
Favicon({ type: 'image/png', href: '/favicon.png' })
/*
<link rel="icon" type="image/png" href="/favicon.png">
*/

Favicon({ href: '/favicon.ico' })
/*
<link rel="icon" href="/favicon.ico">
*/
```

#### `LoadCss`

`` `<link rel="stylesheet" href="${path}">` ``の結果を返します。

```typescript
LoadCss(path: string): string
```

| 引数 | 説明 |
| --- | --- |
| path | CSSファイルへのパス。 |

#### `LoadJs`

`` `<script src="${path}"></script>` ``の結果を返します。

```typescript
LoadJs(path: string): string
```

| 引数 | 説明 |
| --- | --- |
| path | JavaScriptファイルへのパス。 |

#### `Meta`

様々な`meta`タグを返します。

```typescript
Meta(params: Params, options?: Options): string
```

| 引数 | 説明 |
| --- | --- |
| params | 返す`meta`タグの内容となるオブジェクト。設定項目は下記に記載しています。 |
| options | 各種オプション設定用オブジェクト。設定項目は下記に記載しています。 |

`params`の設定項目:

| 項目 | 説明 |
| --- | --- |
| charset | `charset`の内容を文字列で設定します。 |
| title | `og:title`や(`options.includeTitleElement`が`true`のとき)`tiltle`の内容を文字列で設定します。 |
| description | `description`や`og:description`の内容を文字列で設定します。 |
| viewport | `viewport`の内容を文字列で設定します。 |
| refresh | `refresh`の内容を文字列で設定します。 |
| ogTitle | `og:title`の内容を文字列で設定します。`title`プロパティの値よりも優先され、`options.autoOg`の値に関わらず`meta`タグを返します。 |
| ogDescription | `og:description`の内容を文字列で設定します。`description`プロパティの値よりも優先され、`options.autoOg`の値に関わらず`meta`タグを返します。 |
| ogUrl | `og:url`の内容を文字列で設定します。 |
| ogImage | `og:image`の内容を文字列で設定します。 |
| ogSiteName | `og:site_name`の内容を文字列で設定します。 |
| ogType | `og:type`の内容を`'website'`, `'article'`のいずれかで設定します。 |
| twitterCard | `twitter:card`の内容を`'summary'`, `'summary_large_image'`, `'app'`, `'player'`のいずれかで設定します。 |
| twitterSite | `twitter:site`の内容を文字列で設定します。 |
| twitterCreator | `twitter:creator`の内容を文字列で設定します。 |
| fbAppId | `fb:app_id`の内容を文字列で設定します。 |

`options`の設定項目:

| 項目 | 説明 |
| --- | --- |
| autoOg | 真偽値で、OGPタグを自動で返すか設定します。初期値は`true`です。 |
| includeTitleElement | 真偽値で、`params.title`の値が入力された`title`タグを返すか設定します。初期値は`false`です。 |

```typescript
Meta({ charset: 'UTF-8' })
/*
<meta charset="UTF-8">
*/

Meta({ title: 'Title' }, { includeTitleElement: true })
/*
<meta property="og:title" content="Title">
<title>Title</title>
*/

Meta({ description: 'Description' })
/*
<meta name="description" content="Description">
<meta property="og:description" content="Description">
*/

Meta({ description: 'Description' }, { autoOg: false })
/*
<meta name="description" content="Description">
*/

Meta({ description: 'Description', ogDescription: 'OgDescription' })
/*
<meta name="description" content="Description">
<meta property="og:description" content="OgDescription">
*/

Meta({ viewport: 'width=device-width, initial-scale=1.0' })
/*
<meta name="viewport" content="width=device-width, initial-scale=1.0">
*/
```

## License

[MIT](https://github.com/frontJ/elements/blob/master/LICENSE)