document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.querySelector(".settings-button");
    const settingsMenu = document.querySelector(".settings-menu");
    const applyButton = document.querySelector(".apply-button");
    const closeButton = document.querySelector(".close-button");

    if (settingsMenu) {
        settingsMenu.style.display = "none";
    }

    settingsButton.addEventListener("click", function () {
        settingsMenu.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        settingsMenu.style.display = "none";
    });

    applyButton.addEventListener("click", function () {
        const tabName = document.getElementById("tabName").value;
        const faviconURL = document.getElementById("faviconURL").value;
        const panicKey = document.getElementById("panicKey").value;
        const panicURL = document.getElementById("panicURL").value;

        console.log("Tab Name:", tabName);
        console.log("Favicon URL:", faviconURL);
        console.log("Panic Key:", panicKey);
        console.log("Panic URL:", panicURL);

        if (tabName) document.title = tabName;

        if (faviconURL) {
            console.log("Updating favicon...");
            let link = document.querySelector("link[rel='icon']");
            if (!link) {
                console.log("Creating new favicon link...");
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }
            link.href = faviconURL;
            console.log("Favicon updated:", link.href);
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === panicKey) {
                window.location.href = panicURL;
            }
        });
    });
});

function applyPreset(tabName, faviconURL) {

    document.getElementById("tabName").value = tabName;

    document.getElementById("faviconURL").value = faviconURL;


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
