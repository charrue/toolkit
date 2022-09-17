import { isDataURL } from "../isDataURL";

/**
 * @description 将dataURL 转为 Blob 格式
 * @param { string } dataURL - DataURL, 即前缀为`data:`协议的 URL
 * @return { Blob | null } 如果不是 DataURL, 则返回 null，否则返回 Blob
 */
export const dataUrlToBlob = (dataURL: string) => {
  if (!isDataURL(dataURL)) return null;

  const arr = dataURL.split(',');
  const mime = arr?.[0].match(/:(.*?);/)?.[1];
  const bstr = atob(btoa(arr[1]));
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};