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