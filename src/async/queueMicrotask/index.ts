/* eslint-disable no-return-assign */
export const queueMicrotaskPolyfill: (cb: () => void) => void = typeof queueMicrotask === "function"
  ? queueMicrotask.bind(typeof window !== "undefined" ? window : global)
  : (cb) => (Promise.resolve())
    .then(cb)
    .catch((err) => setTimeout(() => { throw err; }, 0));
