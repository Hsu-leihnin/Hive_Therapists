document.addEventListener("DOMContentLoaded", function () {
     document.body.classList.add("fade-in");

     document.querySelectorAll(".nav-link").forEach(link => {
          link.addEventListener("click", function (e) {
               e.preventDefault();
               const target = this.href;

               document.body.classList.remove("fade-in");
               document.body.classList.add("fade-out");

               setTimeout(() => {
                    window.location.href = target;
               }, 200); // Duration of the fade-out transition
          });
     });
});