!function(){const e=document.getElementById("color-scheme");function t(t){localStorage["color-scheme"]=t,document.documentElement.classList.remove("light"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add(t),e&&("dark"===t?(e.querySelector(".sunny").classList.remove("hidden"),e.querySelector(".moon").classList.add("hidden"),e.title="Modo claro"):(e.querySelector(".sunny").classList.add("hidden"),e.querySelector(".moon").classList.remove("hidden"),e.title="Modo escuro"))}!function(){let c="light";localStorage["color-scheme"]?c=localStorage["color-scheme"]:matchMedia&&matchMedia("(prefers-color-scheme: dark)").matches&&(c="dark"),e&&e.addEventListener("click",(()=>{document.documentElement.classList.contains("dark")?t("light"):t("dark")})),t(c)}(),[...document.querySelectorAll('input[type="range"]')].forEach((e=>{e.dataset.value=e.value,e.addEventListener("input",(()=>e.dataset.value=e.value))})),[...document.querySelectorAll("select")].forEach((e=>{e.dataset.value=e.value,e.addEventListener("change",(()=>e.dataset.value=e.value))}))}();
//# sourceMappingURL=index.eb74ae5c.js.map
