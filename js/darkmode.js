
const mql = window.matchMedia('(prefers-color-scheme: dark)')

function setDarkMode() {
    if(mql.matches) {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
    } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    }
}

setDarkMode()

mql.addEventListener("change", setDarkMode);