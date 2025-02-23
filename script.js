document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.querySelector(".save-button");
    const resetButton = document.querySelector(".reset-button");

    loadSettings();

    saveButton.addEventListener("click", function () {
        const tabName = document.getElementById("tabName").value;
        const faviconURL = document.getElementById("faviconURL").value;
        const panicKey = document.getElementById("panicKey").value;
        const panicURL = document.getElementById("panicURL").value;

        localStorage.setItem("tabName", tabName);
        localStorage.setItem("faviconURL", faviconURL);
        localStorage.setItem("panicKey", panicKey);
        localStorage.setItem("panicURL", panicURL);

        applySettings(tabName, faviconURL);

        console.log("Settings Saved:", { tabName, faviconURL, panicKey, panicURL });
        showPopup("Settings Saved.");
    });

    resetButton.addEventListener("click", function () {

        localStorage.removeItem("tabName");
        localStorage.removeItem("faviconURL");
        localStorage.removeItem("panicKey");
        localStorage.removeItem("panicURL");

        document.getElementById("tabName").value = "";
        document.getElementById("faviconURL").value = "";
        document.getElementById("panicKey").value = "";
        document.getElementById("panicURL").value = "";

        applySettings("ReUnlocked", "https://raw.githubusercontent.com/ReUnlocked/Assets/refs/heads/main/icon.ico");

        console.log("Settings Reset");
        showPopup("Settings Reset.");
    });

    function applySettings(tabName, faviconURL) {
        if (tabName) document.title = tabName;
        if (faviconURL) {
            let link = document.querySelector("link[rel='icon']");
            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }
            link.href = faviconURL;
        }
    }

    function loadSettings() {
        const tabName = localStorage.getItem("tabName");
        const faviconURL = localStorage.getItem("faviconURL");
        const panicKey = localStorage.getItem("panicKey");
        const panicURL = localStorage.getItem("panicURL");

        if (tabName) document.getElementById("tabName").value = tabName;
        if (faviconURL) document.getElementById("faviconURL").value = faviconURL;
        if (panicKey) document.getElementById("panicKey").value = panicKey;
        if (panicURL) document.getElementById("panicURL").value = panicURL;

        applySettings(tabName, faviconURL);
    }

    function showPopup(message) {
        const popup = document.createElement("div");
        popup.className = "custom-popup";
        popup.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke="currentColor" stroke-width="2" class="lucide lucide-circle-check">
                <circle cx="12" cy="12" r="10" key="1mglay"></circle>
                <path d="m9 12 2 2 4-4" key="dzmm74"></path>
            </svg>
            <span>${message}</span>
        `;
        document.body.appendChild(popup);

        setTimeout(() => popup.classList.add("show"), 10);

        setTimeout(() => {
            popup.classList.remove("show");
            setTimeout(() => popup.remove(), 300);
        }, 10000);
    }
});
