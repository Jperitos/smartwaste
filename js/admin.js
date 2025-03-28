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