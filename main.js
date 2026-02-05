document.getElementById("intro-button").addEventListener("click",
    () => {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("modal").style.justifyContent = "center";
        document.getElementById("modal").style.alignItems = "center";
    });

document.getElementById("modal-button").addEventListener("click",
    (event) => {
        event.preventDefault();
        document.getElementById("modal").style.display = "none";
    });

document.getElementById("modal").addEventListener("click",
    (event) => {
        if (event.target === event.currentTarget) {
            document.getElementById("modal").style.display = "none";
        }
    });
