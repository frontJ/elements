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
  LoadCss
} from '@frontj/elements'

const text = (...contents) => p(
  {
    attrs: {
      class: 'text'
    }
  },
  ...contents
)

const contents = html(
  head(
    title('frontJ example.'),
    LoadCss('style.css')
  ),
  body(
    h1({ attrs: { class: 'heading' } }, 'Hello!'),
    text('foo', br(), 'bar'),
    input(
      {
        attrs: {
          type: 'checkbox',
          checked: ''
        }
      }
    )
  )
)

writeFileSync('index.html', contents)
```

HTML(整形後):

```html
<!DOCTYPE html>
<html>
  <head>
    <title>frontJ example.</title>
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

## License

[MIT](https://github.com/frontJ/elements/blob/master/LICENSE)