document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-link");
    const panes = document.querySelectorAll(".tab-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            panes.forEach(p => p.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(this.dataset.tab).classList.add("active");
        });
    });
});



window.onload = function () {
    const modal = document.getElementById("staffRequestModal");
    const openModal = document.getElementById("openStaffRequest");
    const closeModal = document.querySelector(".close-staff-modal");

    if (openModal && modal && closeModal) {
        // Open Modal
        openModal.addEventListener("click", function () {
            modal.style.display = "block";
        });

        // Close Modal
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Close Modal when clicking outside
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error("One or more modal elements not found.");
    }
};


