function toggleMenu() {
    let menu = document.getElementById("sidebar");
    menu.classList.toggle("active");
}
function showSkin(type) {
    let text = "";

    if (type === "dry") {
        text = " Use a rich moisturizer daily.<br>Avoid hot showers (they dry the skin).<br>Use gentle, hydrating cleansers<br>Drink plenty of water";
    }

    else if (type === "oily") {
        text = "Use oil-free and lightweight products.<br> Avoid touching your face .<br>Use a toner to control oil.<br>Wash your face twice a day";
    }

    else if (type === "combo") {
        text = "use different products for oily and dry areas.<br>Cleanse your face gently.<br>Moisturize all areas (light cream).<br>Avoid harsh products.";
    }

    else if (type === "sensitive") {
        text = "Test products before using them.<br>Avoid strong chemicals.<br>Protect your skin from sun.<br>use gentle and fragrance-free products.";
    }

    document.getElementById("result").innerHTML = text;
}
if (document.querySelector(".products")) {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display = "none";
    });
}
function filterProducts(type) {
    const cards = document.querySelectorAll(".card");
    const message = document.getElementById("message");
    if (message) message.style.display = "none";

    cards.forEach(card => {
        if (card.classList.contains(type)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function addCart() {
    const message = document.getElementById("message");

    if (message) {
        message.style.display = "block";
        message.innerText = "Product added to cart 🛒";
    }
}function setRoutine(type) {
  let morning = "";
  let night = "";

  if (type === "dry") {
    morning = "Gentle Cleanser → Hydrating Moisturizer → Sunscreen";
    night = "Cleanser → Hydrating Serum → Thick Moisturizer";
  }

  if (type === "oily") {
    morning = "Foaming Cleanser → Light Moisturizer → Sunscreen";
    night = "Cleanser → Niacinamide Serum → Gel Moisturizer";
  }

  if (type === "combination") {
    morning = "Cleanser → Balanced Moisturizer → Sunscreen";
    night = "Cleanser → Serum → Moisturizer";
  }

  if (type === "sensitive") {
    morning = "Gentle Cleanser → Soothing Moisturizer → Sunscreen";
    night = "Cleanser → Calming Serum → Moisturizer";
  }

  document.getElementById("morning-text").innerText = morning;
  document.getElementById("night-text").innerText = night;
}
// Récupérer le formulaire et l'élément d'erreur
const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("number").value.trim();
  const message = document.getElementById("message").value.trim();

   // Vérification (validation)
  if(name === "" || number === "" || message === "") {
    error.textContent = "Please fill all fields!";
    return;
  }
   // Message succès
  error.style.color = "green";
  error.textContent = "Message sent successfully!";
});
