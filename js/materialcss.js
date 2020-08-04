let style = document.createElement("style");
style.innerText = '@import url("https://spthiel.github.io/materialcss/css/theme.css");@import url("https://spthiel.github.io/materialcss/css/color.css");'
document.head.appendChild(style);
let js = document.createElement("script");
js.setAttribute("src","https://spthiel.github.io/materialcss/js/darkmode.js");
js.setAttribute("type","application/javascript");
document.head.appendChild(js);