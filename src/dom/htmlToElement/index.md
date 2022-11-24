# htmlToElement
将DOM字符串转换为DOM元素

# Usage
``` ts
const dom = htmlToElement("<div id='app'> <span>Hello World</span> </div>");

document.body.appendChild(dom!);
```
