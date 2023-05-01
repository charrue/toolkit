function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy", err);
  }

  document.body.removeChild(textArea);
}

/**
 * @description - 将文本复制到剪贴板
 */
export function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text);
}
