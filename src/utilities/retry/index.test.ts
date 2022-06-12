import { describe, test, vi, expect, beforeEach } from 'vitest';
import { createRetry, OriginFunctionWithPayload } from './index';

type Payload = {
  a?: number;
  b?: number;
}

describe("createRetry", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  test("init", () => {
    const fn = vi.fn()
    const originRequest: OriginFunctionWithPayload<Payload> = ({ payload, actions }) => {
      console.log(actions.getCounts(), "actions.attempts")

      if (actions.getCounts() <= 2) {
        actions.retry(new Error('error'))
        return
      }
      expect(payload).toEqual({ a: 1, b: 2})
      expect(actions.getErrors().length).toEqual(2)
      fn()
    }
    const operation = createRetry<Payload>(originRequest, {
      retry: 3
    })

    operation({ a: 1, b: 2 })
    vi.runAllTimers()
    expect(fn).toBeCalledTimes(1)
  })
})