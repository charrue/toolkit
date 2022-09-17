/**
 * @description 将图片url转换为base64
 * @param { string } url - 图片url
 * @param { RequestInit } params - 图片url的参数
 * @returns { string } base64
 * @throws { Error } 当图片url不存在时抛出错误
 */
export const imageUrlToBase64 = async (
  url: string,
  params: RequestInit = {}
): Promise<string> => {
  try {
    const blob = await fetch(url, params).then((response) => response.blob());
    return new Promise((resolve, reject) => {
      const IFileReader = new FileReader();
      IFileReader.onload = (e) => {
        const result = e?.target?.result;
        if (typeof result !== "string") {
          reject(new Error("Conversion of dataUrl error"));
        } else {
          resolve(result);
        }
      };
      IFileReader.onerror = (error) => {
        reject(error);
      };
      IFileReader.readAsDataURL(blob);
    });
  } catch (error) {
    throw error;
  }
};
