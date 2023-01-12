export const easyUuid = (() => {
  let id = 0;
  return () => {
    id += 1;
    return (id + Date.now()).toString(36);
  };
})();
