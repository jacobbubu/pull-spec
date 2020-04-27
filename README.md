# @jacobbubu/pull-spec

[![Build Status](https://github.com/jacobbubu/pull-spec/workflows/Build%20and%20Release/badge.svg)](https://github.com/jacobbubu/pull-spec/actions?query=workflow%3A%22Build+and+Release%22)
[![Coverage Status](https://coveralls.io/repos/github/jacobbubu/pull-spec/badge.svg)](https://coveralls.io/github/jacobbubu/pull-spec)
[![npm](https://img.shields.io/npm/v/@jacobbubu/pull-spec.svg)](https://www.npmjs.com/package/@jacobbubu/pull-spec/)

> Rewritten [pull-spec](https://github.com/dominictarr/pull-spec) in TypeScript.

# pull-spec

check that a pull-stream has the correct behavior.

``` js
import { Source } from '@jacobbubupull-spec'
var pull = require('pull-stream')

pull(
  Source(pull.values([1,2,3])),
  ...
)
```
will throw an error if the stream callbacks too many times, or out of turn,
and also if read is called incorrectly.

It's generally enough to just connect the sink.

## License

MIT
