/**
 * @description 基于时间戳与递增数字组成的16位进制数
 */
export const simpleUuid = (() => {
  let id = 0;
  return () => {
    id += 1;
    return (id + Date.now()).toString(36);
  };
})();
