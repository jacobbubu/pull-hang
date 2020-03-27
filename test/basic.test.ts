import Hang from '../src'

describe('basic', () => {
  it('abort directly', (done) => {
    const result: string[] = []
    const read = Hang(() => {
      result.push('finished')
      expect(result).toEqual(['aborted', 'finished'])
      done()
    })
    read(true, function (end) {
      expect(end).toBe(true)
      result.push('aborted')
    })
  })

  it('hang does nothing until you abort', (done) => {
    let aborted = false
    let ended = false

    const read = Hang()

    read(null, function (end) {
      expect(end).toBeTruthy()
      expect(aborted).toBeTruthy()
      ended = true
    })

    aborted = true

    read(true, function (end) {
      expect(ended).toBeTruthy()
      done()
    })
  })

  it('with onAbort', (done) => {
    let aborted = false
    let ended = false
    const result: string[] = []

    const read = Hang(() => {
      result.push('finished')
      expect(result).toEqual(['read called-back', 'aborted', 'finished'])
      done()
    })

    read(null, function (end) {
      expect(end).toBeTruthy()
      expect(aborted).toBeTruthy()
      ended = true
      result.push('read called-back')
    })

    aborted = true

    read(true, function (end) {
      expect(ended).toBeTruthy()
      result.push('aborted')
    })
  })
})
