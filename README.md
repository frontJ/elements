# @frontj/elements

[frontJ](https://github.com/frontJ/frontJ)の`createElement`関数を様々なHTML要素に適用したものをエクスポートしたパッケージです。

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
  input
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
  </head>
  <body>
    <h1 class="heading">Hello!</h1>
    <p class="text">foo<br>bar</p>
    <input type="checkbox" checked>
  </body>
</html>
```

## License

[MIT](https://github.com/frontJ/elements/blob/master/LICENSE)