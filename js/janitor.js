document.getElementById("profileIcon").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("profileDropdown").classList.toggle("show");
});

window.addEventListener("click", function(event) {
    const profileDropdown = document.getElementById("profileDropdown");
    if (!event.target.closest("#profileIcon") && !event.target.closest("#profileDropdown")) {
        profileDropdown.classList.remove("show");
    }
});

function showNotifications() {
    const dropdown = document.getElementById("notificationDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("notificationDropdown");
    if (!event.target.closest("#bellIcon") && !event.target.closest("#notificationDropdown")) {
        dropdown.style.display = "none";
    }
});