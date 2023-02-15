/**
 * @description 获取图片的宽高和宽高比
 * @param {string} url 图片地址
 * @returns {Promise<{width: number, height: number, ratio: number}>}
 * @example
 * getImageMeta('https://img.alicdn.com/tfs/TB1ZQY9X8r0gK0jSZFnXXbRRXXa-200-200.png').then((meta) => {
 *  console.log(meta);
 * });
 * // => { width: 200, height: 200, ratio: 1 }
 */
export const getImageMeta = (url: string) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    const meta = {
      width: img.width,
      height: img.height,
      ratio: img.width / img.height,
    };
    resolve(meta);
  };
  img.onerror = (err) => reject(err);
  img.src = url;
});
