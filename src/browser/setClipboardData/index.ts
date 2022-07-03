/**
 * @description 文本复制到剪贴板
 * @param { string } text - 要复制的文本
 */
export const setClipboardData = (value: string) => {
  const input = document.createElement('input');
  input.setAttribute('value', value);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
};
