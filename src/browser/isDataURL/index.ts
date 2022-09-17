const DATA_URL_RE =  /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i

/**
 * @description 判断是否为 DataURL
 * @param {string} url - 图片 URL
 * @link DataURL: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
 * @link The "data" URL scheme: http://tools.ietf.org/html/rfc2397
 * @returns {boolean} 是否为 DataURL
 */
export const isDataURL = (str: string) => {
  return !!str.match(DATA_URL_RE);
}
