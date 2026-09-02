
/* =========================================================
   MOBILE SIDEBAR
   ========================================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarClose = document.getElementById("sidebarClose");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");


function openSidebar() {
    mobileSidebar.classList.add("active");
    sidebarOverlay.classList.add("active");
    mobileMenuBtn.classList.add("active");

    document.body.classList.add("sidebar-open");
}


function closeSidebar() {
    mobileSidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    mobileMenuBtn.classList.remove("active");

    document.body.classList.remove("sidebar-open");
}


/* Open */

mobileMenuBtn.addEventListener("click", openSidebar);


/* Close */

sidebarClose.addEventListener("click", closeSidebar);


/* Close when clicking outside */

sidebarOverlay.addEventListener("click", closeSidebar);


/* Close after selecting a link */

sidebarLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        closeSidebar();
    });

});

