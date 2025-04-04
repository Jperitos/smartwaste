//   addmin
  
document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", function () {
  
      document.querySelectorAll(".menu-item").forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      document.querySelectorAll(".content-panel").forEach((panel) => panel.classList.remove("active"));

   
      const target = this.getAttribute("data-target");
      document.getElementById(target).classList.add("active");
    });
  });

  function logout() {
    localStorage.removeItem('userSession'); 
    sessionStorage.clear(); 
    
    window.location.href = "../index.html";
}

// Filter Table Function
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

// Sort Table Function
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
