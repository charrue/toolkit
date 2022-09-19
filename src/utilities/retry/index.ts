import { ONE_SECOND, ONE_DAY, ONE_MINUTE } from "../../date/constants";

export interface RetryAction {
  retry(err: Error): void
  getErrors(): Error[]
  getCounts(): number
}

interface RetryOptions {
  retry?: number
  factor?: number
  minTimeout?: number
  maxTimeout?: number
  maxRetryTime?: number
}

export type OriginFunctionWithPayload<T> = (params: { payload: T; actions: RetryAction }) => void

export const createRetry = <P extends object>(
  originFn: OriginFunctionWithPayload<P>,
  options: RetryOptions = {},
) => {
  const {
    retry: retryCount = 3,
    minTimeout = ONE_SECOND,
    maxTimeout = ONE_DAY,
    factor = 2,
    maxRetryTime = ONE_MINUTE,
  } = options;

  let timeoutId: any | null = null;
  let callCount = 1;
  const errors: Error[] = [];
  const random = Math.random() + 1;
  let startTime: number = new Date().getTime();
  let cachedPayload: P | null = null;

  const timeouts = Array.from({ length: retryCount }).map((_, index) => {
    // eslint-disable-next-line no-restricted-properties
    const t = Math.round(random * Math.max(minTimeout, 1) * Math.pow(factor, index));
    return Math.min(t, maxTimeout);
  });

  const actions = {
    getErrors() {
      return errors;
    },
    getCounts() {
      return callCount;
    },
  };

  const retry = (err: Error) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (!err) return false;

    errors.push(err);
    const currentTime = new Date().getTime();

    if (err && currentTime - startTime >= maxRetryTime) {
      errors.unshift(new Error("RetryOperation timeout occurred"));
      return false;
    }

    const curTimeout = timeouts.shift();
    if (!curTimeout) return false;

    timeoutId = setTimeout(() => {
      callCount += 1;
      originFn({
        payload: cachedPayload!,
        actions: {
          ...actions,
          retry,
        },
      });
    }, curTimeout);

    return true;
  };

  return (payload: P) => {
    startTime = new Date().getTime();
    cachedPayload = payload;

    originFn({
      payload,
      actions: {
        ...actions,
        retry,
      },
    });
  };
};
