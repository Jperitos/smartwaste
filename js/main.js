function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.remove("active");
    });
    document.getElementById(tabId).classList.add("active");
    event.target.classList.add("active");
  }
  document.querySelectorAll(".table2 td:nth-child(7)").forEach((td) => {
    if (td.textContent.trim() === "Pending") {
      td.style.color = "#E5C33B";
    } else if (td.textContent.trim() === "Confirm") {
      td.style.color = "#3A7D44";
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".table2 tr").forEach((row) => {
      row.addEventListener("click", function () {
        document.querySelectorAll(".table2 tr").forEach((r) => r.classList.remove("selected"));

        this.classList.add("selected");
      });
    });
  });

// profile
const profileIcon = document.getElementById("profileIcon");
const profileDropdown = document.getElementById("profileDropdown");

profileIcon.addEventListener("click", (event) => {
  event.preventDefault();
  profileDropdown.classList.toggle("show");
});

window.addEventListener("click", (event) => {
  if (!profileIcon.contains(event.target) && !profileDropdown.contains(event.target)) {
    profileDropdown.classList.remove("show");
  }
});

// notificaions 
  function showNotifications() {
    var dropdown = document.getElementById("notificationDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("notificationDropdown");
    var bellIcon = document.querySelector(".bell-icon");
    
    if (!dropdown.contains(event.target) && !bellIcon.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
// filter table
document.getElementById("dateFilter").addEventListener("input", filterTable);
let sortAsc = true;

function filterTable() {
    let filterDate = document.getElementById("dateFilter").value;
    let table = document.getElementById("tableBody");
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let dateCell = rows[i].getElementsByTagName("td")[3]; 
        if (dateCell) {
            let rowDate = dateCell.textContent || dateCell.innerText;

            if (rowDate === filterDate || filterDate === "") {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

function sortTable() {
    let table = document.getElementById("tableBody");
    let rows = Array.from(table.getElementsByTagName("tr"));

    rows.sort((a, b) => {
        let dateA = a.cells[3].textContent; 
        let dateB = b.cells[3].textContent;

        let timeA = a.cells[4].textContent;
        let timeB = b.cells[4].textContent;

        let fullDateA = new Date(dateA + " " + timeA);
        let fullDateB = new Date(dateB + " " + timeB);

        return sortAsc ? fullDateA - fullDateB : fullDateB - fullDateA;
    });

    sortAsc = !sortAsc; 
    rows.forEach(row => table.appendChild(row)); 
}

document.getElementById("sortBtn").addEventListener("click", sortTable);

// progress bar
function updateProgressBars() {
  const bins = document.querySelectorAll(".bin-status p");

  bins.forEach((bin, index) => {
      const progressText = bin.querySelector(".progress");
      const progressValue = parseInt(progressText.getAttribute("data-progress"), 10);
      const progressBar = document.querySelectorAll(".progress-bar")[index];

      if (progressBar) {
          progressBar.style.width = progressValue + "%";
      }
  });
}


window.onload = updateProgressBars;
// staff tab sorting and search bar
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("binSearch");
  const table = document.querySelector(".table2");
  const rows = table.querySelectorAll("tr:not(:first-child)"); 
  const sortBtn = document.getElementById("sortBtn");

  // SEARCH FUNCTION
  searchInput.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase();
      rows.forEach(row => {
          const text = row.textContent.toLowerCase();
          row.style.display = text.includes(searchValue) ? "" : "none";
      });
  });

  // SORT FUNCTION
  let isAscending = true; 
  sortBtn.addEventListener("click", function () {
      const rowsArray = Array.from(rows);

      rowsArray.sort((rowA, rowB) => {
          const dateA = rowA.cells[0].textContent.trim(); 
          const dateB = rowB.cells[0].textContent.trim();
          return isAscending ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA);
      });

      isAscending = !isAscending; 

      rowsArray.forEach(row => table.appendChild(row)); 
  });
});


// add staff modal
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("staffModal");

  // Open Modal
  openModalBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Close Modal
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});


// update staff modal
const updateModal = document.getElementById("updateStaffModal");
const closeUpdateModalBtn = document.getElementById("closeUpdateModalBtn");


const editButtons = document.querySelectorAll(".edit-btn");

editButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const staffId = this.getAttribute("data-id"); // Get staff ID

    // Populate fields with sample data (Replace with actual data from DB)
    document.getElementById("updateName").value = "Jamaica Anuba"; 
    document.getElementById("updateAge").value = "35";
    document.getElementById("updateContact").value = "09950913018";
    document.getElementById("updateAddress").value = "Tungkil Minglanilla";
    document.getElementById("updateEmail").value = "example@email.com";
    document.getElementById("updateFloor").value = "2";
    document.getElementById("updateMaritalStatus").value = "Single";

    updateModal.style.display = "flex"; 
  });
});

closeUpdateModalBtn.addEventListener("click", () => {
  updateModal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === updateModal) {
    updateModal.style.display = "none";
  }
});

// delete modal
const deleteModal = document.getElementById("deleteConfirmModal");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");


let staffToDelete = null;

const deleteButtons = document.querySelectorAll(".delete-btn");

deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    staffToDelete = this.closest("tr"); 
    deleteModal.style.display = "flex"; 
  });
});

// Confirm delete action
confirmDeleteBtn.addEventListener("click", () => {
  if (staffToDelete) {
    staffToDelete.remove(); 
    staffToDelete = null;
  }
  deleteModal.style.display = "none"; 
});

// Cancel delete action
cancelDeleteBtn.addEventListener("click", () => {
  deleteModal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === deleteModal) {
    deleteModal.style.display = "none";
  }
});

//   admin
  
     document.querySelectorAll(".menu-item").forEach((item) => {
        item.addEventListener("click", function () {
      
          document.querySelectorAll(".menu-item").forEach((link) => link.classList.remove("active"));
          this.classList.add("active");

          document.querySelectorAll(".content-panel").forEach((panel) => panel.classList.remove("active"));

       
          const target = this.getAttribute("data-target");
          document.getElementById(target).classList.add("active");
        });
      });