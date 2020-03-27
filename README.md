# @jacobbubu/pull-hang

[![Build Status](https://travis-ci.org/jacobbubu/pull-hang.svg)](https://travis-ci.org/jacobbubu/pull-hang)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/pull-hang/badge.svg)](https://coveralls.io/github/jacobbubu/pull-hang)
[![npm](https://img.shields.io/npm/v/@jacobbubu/pull-hang.svg)](https://www.npmjs.com/package/@jacobbubu/pull-hang/)

> Written [pull-hang](https://github.com/dominictarr/pull-hang) in TypeScript.

# pull-hang

a pull-stream source that does nothing until you abort it.

``` js
import Hang from 'pull-hang'

const hang = Hang()
pull(
  hang
  pull.collect(function (err) {
    //this will never callback, until you call hang(true, cb)
  })
)

//abort the stream after a timeout.
setTimeout(function () {
  hang(true, function () {})
}, 100)

```

## License

MIT
