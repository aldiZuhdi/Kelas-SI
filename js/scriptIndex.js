Swal.fire({
  //animasi alert
  title: "Welcome",
  text: "Camat datang calon Sarjana !!!",
  imageUrl: "./assets/hero12.jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Kelas 19.1A.24",
});

//toggle aktif navbar
function toggleMenu() {
  const navItem = document.querySelector(".nav-navItem");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  navItem.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}

//animate css saat scroll
function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Cek elemen berdasarkan id untuk menentukan animasi yang diterapkan
      if (entry.target.id === "heroTextTitle") {
        entry.target.classList.add("animate__fadeInUp"); // Animasi untuk textArea
      } else if (entry.target.id === "heroTextDescription") {
        entry.target.classList.add("animate__fadeInDown"); // Animasi untuk cardArea
      } else if (entry.target.id === "textLink") {
        entry.target.classList.add("animate__lightSpeedInLeft"); // Animasi untuk cardArea
      }
      observer.unobserve(entry.target); // Hentikan observasi setelah animasi diterapkan
    }
  });
}

// Buat observer
const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.1, // 50% dari elemen harus terlihat sebelum memicu animasi
});

// Targetkan kedua elemen div
const heroTextTitle = document.getElementById("heroTextTitle");
const heroTextDescription = document.getElementById("heroTextDescription");
const textLink = document.getElementById("textLink");

// Mulai observasi kedua elemen
observer.observe(heroTextTitle);
observer.observe(heroTextDescription);
observer.observe(textLink);
