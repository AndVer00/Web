const pages = {
    favorites: "Избранное",
    cart: "Корзина",
    personal_account: "Личный кабинет"
}

function getLocation() {
    const directories = document.location.href.split("/")
    const currentWindowName = pages[directories[directories.length - 1].split(".")[0]];

    document.querySelectorAll(".utility-bar__nav-item").forEach(i => {
        if (i.textContent === currentWindowName) {
            i.classList.add("utility-bar__nav-item__selected");
        }
    });
}

document.addEventListener("DOMContentLoaded", getLocation);