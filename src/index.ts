import * as pull from 'pull-stream'

export function Source<T>(source: pull.Source<T>, name = '') {
  let calling: boolean | Error = false
  return function (abort: pull.Abort, cb: pull.SourceCallback<T>) {
    if (abort) {
      return source(abort, function (err, data) {
        cb(err, data)
      })
    }
    if (calling) {
      console.log((calling as Error).stack)
      throw new Error(name + ': already calling')
    }
    calling = new Error('calling')
    let called = false
    source(abort, function (end, data) {
      if (called) {
        throw new Error(name + ': already called')
      }
      if (end && data) {
        throw new Error(name + ': data should be null if end')
      }
      calling = false
      cb(end, data)
    })
  }
}

export function Sink<T>(sink: pull.Sink<T>) {
  let called = false
  return function (source: pull.Source<T>) {
    if (called) {
      throw new Error('piped sink too more than once')
    }
    called = true
    return sink(Source(source))
  }
}
