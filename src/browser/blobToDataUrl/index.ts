/**
 * @description 将 file、blob、stream 格式 转 DateURL
 * @param {File|Blob|ReadableStream} file - 文件
 * @throws {@link ProgressEvent}
 */
export const blobToDataUrl = (
  blob: Blob | File,
): Promise<string | ArrayBuffer> => {
  return new Promise((success, fail) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      success(reader.result ?? '');
    };
    reader.onerror = (err) => {
      fail(err);
    };
  });
};