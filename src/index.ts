import * as pull from 'pull-stream'

export type OnAbort = (data?: any) => void

export default function hang(onAbort?: OnAbort) {
  let _cb: pull.SourceCallback<any>
  return function (abort: pull.Abort, cb: pull.SourceCallback<any>) {
    if (abort) {
      // callback related to previous read
      if (_cb) {
        _cb(abort)
      }
      // callback related to this abort
      cb(abort)
      if (onAbort) {
        onAbort(true)
      }
    } else {
      _cb = cb
    }
  }
}
