import { imageUrlToBase64 } from '../imageUrlToBase64/index';
import { dataUrlToBlob } from '../dataUrlToBlob/index';

/**
 * @description 将图片的 url 转为 Blob 格式
 * @param { string } url - 图片的 url
 * @returns { Blob } 图片的Blob, 如果不是图片的 url, 则返回 null
 * @throws { Error } 当图片的 url 不存在时抛出错误
 */
export const imageToBlob = async (url: string): Promise<Blob | null> => {
  const dataURL = await imageUrlToBase64(url);
  const blob = await dataUrlToBlob(dataURL);
  return blob;
}
