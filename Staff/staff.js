document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const staffTable = document.getElementById("staffTable");

    // Search functionality
    searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.toLowerCase();
        const rows = staffTable.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            let name = rows[i].getElementsByTagName("td")[1]; // Get the name column
            if (name) {
                let textValue = name.textContent || name.innerText;
                rows[i].style.display = textValue.toLowerCase().includes(searchValue) ? "" : "none";
            }
        }
    });

    // Toggle status between Pending and Confirm
    staffTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("status")) {
            if (event.target.textContent === "Pending") {
                event.target.textContent = "Confirm";
                event.target.classList.remove("pending");
                event.target.classList.add("confirm");
            } else {
                event.target.textContent = "Pending";
                event.target.classList.remove("confirm");
                event.target.classList.add("pending");
            }
        }
    });
});
