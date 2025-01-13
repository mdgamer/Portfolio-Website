/*============================================= toggle style switcher ========================================================*/

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - swithcher on scroll

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
})

/*============================================= Theme Colors =================================================*/

const alternateStyles = Array.from(document.querySelectorAll('link[rel="stylesheet"][title]'));

function setActiveStyle(color) {
    alternateStyles.forEach(style => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*============================================= theme light & dark mode =========================================*/

const dayNight = document.querySelector(".day-night");

// Helper functions to manage cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration in days
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Toggle dark mode and icon on click
dayNight.addEventListener("click", () => {
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

    // Save the current mode to a cookie
    if (document.body.classList.contains("dark")) {
        setCookie("theme", "dark", 7); // Save for 7 days
    } else {
        setCookie("theme", "light", 7); // Save for 7 days
    }
});

// Set the correct icon and mode on page load
window.addEventListener("load", () => {
    const icon = dayNight.querySelector("i");
    const theme = getCookie("theme");

    if (theme === "dark") {
        document.body.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        document.body.classList.remove("dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});
