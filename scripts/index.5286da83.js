!function(){const e=document.getElementById("color-scheme");function t(t){localStorage["color-scheme"]=t,document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add(t),e&&("dark"===t?(e.querySelector(".sunny").classList.remove("hidden"),e.querySelector(".moon").classList.add("hidden"),e.title="Modo claro"):(e.querySelector(".sunny").classList.add("hidden"),e.querySelector(".moon").classList.remove("hidden"),e.title="Modo escuro"))}function o(e){return e.offsetWidth+1<e.scrollWidth}function c(e){return e.offsetHeight+1<e.scrollHeight}!function(){let o="light";localStorage["color-scheme"]?o=localStorage["color-scheme"]:matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches&&(o="dark"),e&&e.addEventListener("click",(()=>{document.documentElement.classList.contains("dark")?t("light"):t("dark")})),t(o)}();new ResizeObserver(function(e,t=100){let o=0;return function(...c){clearTimeout(o),o=setTimeout((()=>e.apply(this,c)),t)}}((function(){const e=(e,t)=>e.title=t(e)?e.textContent.toString().replace(/\n/g," ").replace(/\s+/g," ").trim():"";[...document.querySelectorAll(".truncate")].forEach((t=>e(t,o))),[...document.querySelectorAll(".clamp")].forEach((t=>e(t,c)))}))).observe(document.body),[...document.querySelectorAll('input[type="range"]')].forEach((e=>{e.dataset.value=e.value,e.addEventListener("input",(()=>e.dataset.value=e.value))})),[...document.querySelectorAll("select")].forEach((e=>{e.dataset.value=e.value,e.addEventListener("change",(()=>e.dataset.value=e.value))}))}();
//# sourceMappingURL=index.5286da83.js.map