document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".rafi_nav_link");
    const sections = document.querySelectorAll("section");

    // 1. Highlight Menu Navbar Aktif Saat Diklik atau Di-scroll
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("rafi_active");
            });
            this.classList.add("rafi_active");
        });
    });

    window.addEventListener("scroll", function () {
        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 130;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove("rafi_active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("rafi_active");
            }
        });
    });

    // 2. Interaksi Form Kontak / Pendaftaran Santri
    const contactForm = document.getElementById("rafi_contact_form");
    const feedbackBox = document.getElementById("rafi_form_feedback");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("rafi_nama").value.trim();
        const subjek = document.getElementById("rafi_subjek").value;

        feedbackBox.className = "rafi_feedback rafi_feedback_sukses";
        feedbackBox.innerHTML =
            "Jazakallahu Khairan, <strong>" + nama + "</strong>! Pesan Anda terkait <em>" +
            subjek + "</em> telah diterima oleh pengurus Madrasah Nurul Hikmah Kampung Cibanjaran.";

        contactForm.reset();
    });

    // 3. Klik Foto Galeri untuk Memperbesar (Lightbox)
    const galeriImages = document.querySelectorAll(".rafi_galeri_img");

    galeriImages.forEach(function (img) {
        img.style.cursor = "pointer";
        img.title = "Klik untuk memperbesar foto";

        img.addEventListener("click", function () {
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "10000";
            overlay.style.cursor = "pointer";

            const bigImg = document.createElement("img");
            bigImg.src = this.src;
            bigImg.style.maxWidth = "90%";
            bigImg.style.maxHeight = "85%";
            bigImg.style.borderRadius = "10px";
            bigImg.style.boxShadow = "0 5px 25px rgba(0,0,0,0.5)";

            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);

            overlay.addEventListener("click", function () {
                document.body.removeChild(overlay);
            });
        });
    });
});
