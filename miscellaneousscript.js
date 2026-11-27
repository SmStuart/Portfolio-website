// Mobile navigation and current-year footer.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      mainNav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
};

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(); 

const gallery = document.getElementById("gallery1");

// Get all images
const images = Array.from(gallery.children);

// Randomise image order using Fisher-Yates shuffle
function shuffleImages(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        [array[i], array[randomIndex]] =
        [array[randomIndex], array[i]];

    }

    return array;
}

// Shuffle images
const shuffledImages = shuffleImages(images);

// Display images in their new order
shuffledImages.forEach(image => {
    gallery.appendChild(image);
});



const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
