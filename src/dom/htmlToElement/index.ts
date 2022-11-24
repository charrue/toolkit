export function htmlToDocumentFragment(html: string): DocumentFragment {
  if (html == null) {
    return new DocumentFragment();
  }

  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content;
}

export function htmlToElement<T extends Element = Element>(html: string): T | undefined {
  return (htmlToDocumentFragment(html).firstElementChild as T) ?? undefined;
}
