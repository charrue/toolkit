import { isDataURL } from '../isDataURL/index';

/**
 * @description 将dataURL 转为 File 格式
 * @param { string } dataURL - DataURL, 即前缀为`data:`协议的 URL
 * @return { File | null } 如果不是 DataURL, 则返回 null，否则返回 File
 */
export function dataUrlToFile(dataUrl: string, filename: string) {
  if (!isDataURL(dataUrl)) return null;

  const arr = dataUrl.split(',');
  const mime = arr?.[0].match(/:(.*?);/)?.[1];
  const bstr = atob(btoa(arr[1]));
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}