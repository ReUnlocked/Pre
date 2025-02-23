document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.querySelector(".save-button");
    const resetButton = document.querySelector(".reset-button");

    // Save Settings
    saveButton.addEventListener("click", function () {
        const tabName = document.getElementById("tabName").value;
        const faviconURL = document.getElementById("faviconURL").value;
        const panicKey = document.getElementById("panicKey").value;
        const panicURL = document.getElementById("panicURL").value;

        // Update tab title and favicon
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

        // Save panic key and URL (you can use localStorage or a backend for persistence)
        console.log("Settings Saved:", { tabName, faviconURL, panicKey, panicURL });
        alert("Settings saved!");
    });

    // Reset Settings
    resetButton.addEventListener("click", function () {
        document.getElementById("tabName").value = "";
        document.getElementById("faviconURL").value = "";
        document.getElementById("panicKey").value = "";
        document.getElementById("panicURL").value = "";

        // Reset tab title and favicon to default
        document.title = "ReUnlocked";
        const link = document.querySelector("link[rel='icon']");
        if (link) {
            link.href = "https://raw.githubusercontent.com/ReUnlocked/Assets/refs/heads/main/icon.ico";
        }

        console.log("Settings Reset");
        alert("Settings reset!");
    });
});

// Function to apply a preset
function applyPreset(tabName, faviconURL) {
    // Update the tab name input
    document.getElementById("tabName").value = tabName;

    // Update the favicon URL input
    document.getElementById("faviconURL").value = faviconURL;

    // Update the tab title dynamically
    document.title = tabName;

    // Update the favicon dynamically
    const faviconLink = document.querySelector("link[rel='icon']");
    if (faviconLink) {
        faviconLink.href = faviconURL;
    } else {
        const newFaviconLink = document.createElement("link");
        newFaviconLink.rel = "icon";
        newFaviconLink.href = faviconURL;
        document.head.appendChild(newFaviconLink);
    }
}
