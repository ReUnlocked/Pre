document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.querySelector(".save-button");
    const resetButton = document.querySelector(".reset-button");

    // Load saved settings when the page loads
    loadSettings();

    // Save Settings
    saveButton.addEventListener("click", function () {
        const tabName = document.getElementById("tabName").value;
        const faviconURL = document.getElementById("faviconURL").value;
        const panicKey = document.getElementById("panicKey").value;
        const panicURL = document.getElementById("panicURL").value;

        // Save settings to localStorage
        localStorage.setItem("tabName", tabName);
        localStorage.setItem("faviconURL", faviconURL);
        localStorage.setItem("panicKey", panicKey);
        localStorage.setItem("panicURL", panicURL);

        // Update tab title and favicon
        applySettings(tabName, faviconURL);

        console.log("Settings Saved:", { tabName, faviconURL, panicKey, panicURL });
        alert("Settings saved!");
    });

    // Reset Settings
    resetButton.addEventListener("click", function () {
        // Clear localStorage
        localStorage.removeItem("tabName");
        localStorage.removeItem("faviconURL");
        localStorage.removeItem("panicKey");
        localStorage.removeItem("panicURL");

        // Reset input fields
        document.getElementById("tabName").value = "";
        document.getElementById("faviconURL").value = "";
        document.getElementById("panicKey").value = "";
        document.getElementById("panicURL").value = "";

        // Reset tab title and favicon to default
        applySettings("ReUnlocked", "https://raw.githubusercontent.com/ReUnlocked/Assets/refs/heads/main/icon.ico");

        console.log("Settings Reset");
        alert("Settings reset!");
    });

    // Function to apply settings (tab title and favicon)
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

    // Function to load saved settings
    function loadSettings() {
        const tabName = localStorage.getItem("tabName");
        const faviconURL = localStorage.getItem("faviconURL");
        const panicKey = localStorage.getItem("panicKey");
        const panicURL = localStorage.getItem("panicURL");

        if (tabName) document.getElementById("tabName").value = tabName;
        if (faviconURL) document.getElementById("faviconURL").value = faviconURL;
        if (panicKey) document.getElementById("panicKey").value = panicKey;
        if (panicURL) document.getElementById("panicURL").value = panicURL;

        // Apply saved settings
        applySettings(tabName, faviconURL);
    }
});

// Function to apply a preset
function applyPreset(tabName, faviconURL) {
    // Update the tab name input
    document.getElementById("tabName").value = tabName;

    // Update the favicon URL input
    document.getElementById("faviconURL").value = faviconURL;

    // Update the tab title and favicon dynamically
    document.title = tabName;
    const faviconLink = document.querySelector("link[rel='icon']");
    if (faviconLink) {
        faviconLink.href = faviconURL;
    } else {
        const newFaviconLink = document.createElement("link");
        newFaviconLink.rel = "icon";
        newFaviconLink.href = faviconURL;
        document.head.appendChild(newFaviconLink);
    }

    // Save the preset settings to localStorage
    localStorage.setItem("tabName", tabName);
    localStorage.setItem("faviconURL", faviconURL);
}
