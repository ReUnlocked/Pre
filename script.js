document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const gameCards = document.querySelectorAll(".game-card");
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
    
    searchBar.addEventListener("input", function () {
        const searchText = searchBar.value.toLowerCase().trim();

        if (searchText === "") {
            // If the search bar is empty, show all game sections
            document.querySelectorAll(".game-section").forEach(section => {
                section.style.display = "block";
            });
        } else {
            // Hide all sections and only show matching game cards
            document.querySelectorAll(".game-section").forEach(section => {
                section.style.display = "none";
            });

            gameCards.forEach(card => {
                const title = card.getAttribute("data-title").toLowerCase();
                if (title.includes(searchText)) {
                    card.style.display = "flex";
                    card.closest(".game-section").style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }
    });

    applyButton.addEventListener("click", function () {
        const tabName = document.getElementById("tabName").value;
        const faviconURL = document.getElementById("faviconURL").value;
        const panicKey = document.getElementById("panicKey").value;
        const panicURL = document.getElementById("panicURL").value;

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

        document.addEventListener("keydown", function (event) {
            if (event.key === panicKey) {
                window.location.href = panicURL;
            }
        });
    });
});
