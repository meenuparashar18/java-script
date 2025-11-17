// 1) getElementById → sabse seedha simple
const profileCard = document.getElementById("profile-card");
console.log("Profile Card:", profileCard);

// 2) getElementsByClassName → multiple elements return karta hai (HTMLCollection)
const skillChips = document.getElementsByClassName("skill");
console.log("Skill chips:", skillChips); // abhi empty hoga

// 3) getElementsByTagName → kisi tag ke sab elements
const allButtons = document.getElementsByTagName("button");
console.log("Saare buttons:", allButtons);

// 4) querySelector → CSS selector ka first matching element deta hai
const firstThemeBtn = document.querySelector(".theme-btn");
console.log("First theme button:", firstThemeBtn);

// 5) querySelectorAll → CSS selector ke *saare* matching elements deta hai (NodeList)
const allThemeBtns = document.querySelectorAll(".theme-btn");
console.log("Saare theme buttons:", allThemeBtns);

// 6) Ek element se uska parent find karna
console.log("Profile card ka parent:", profileCard.parentElement);

// 7) Children list check karna (sirf HTML elements)
console.log("Profile card ke children:", profileCard.children);

// 8) Child nodes (isme text nodes bhi aate hai)
console.log("Profile card ke childNodes:", profileCard.childNodes);
function showCardChildrenInfo() {
  const children = profileCard.children;
  for (let child of children) {
    console.log("Element:", child.nodeName, "Classes:", child.classList.value);
  }
}

showCardChildrenInfo();
// Inputs select karte hain
const nameInput = document.getElementById("name-input");
const roleInput = document.getElementById("role-input");
const bioInput = document.getElementById("bio-input");

// Card wale elements select karte hain
const nameDisplay = document.getElementById("profile-name");
const roleDisplay = document.getElementById("profile-role");
const bioDisplay = document.getElementById("profile-bio");
nameInput.addEventListener("input", function() {
  nameDisplay.textContent = nameInput.value;
});
roleInput.addEventListener("input", function() {
  roleDisplay.textContent = roleInput.value;
});
bioInput.addEventListener("input", function() {
  bioDisplay.innerText = bioInput.value;
});

const imgInput = document.getElementById("image-input");
const profileImg = document.getElementById("profile-img");

// Jab user image URL type kare → Image update hogi
imgInput.addEventListener("input", function() {

  const url = imgInput.value.trim();

  // Agar input khaali ho → src attribute remove kar do
  if (url === "") {
    profileImg.removeAttribute("src");
    profileImg.setAttribute("alt", "No image available");
    return;
  }

  // 1) PROPERTY METHOD → direct src change karna
  profileImg.src = url;

  // 2) setAttribute METHOD → alt change karna
  profileImg.setAttribute("alt", "User profile picture");
});
const themeButtons = document.querySelectorAll(".theme-btn"); // sare theme buttons
const card = document.getElementById("profile-card"); // card jiska color change hoga

themeButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    // 1) Clicked button se color read karna
    const color = button.dataset.color; // <-- IMPORTANT
    card.style.backgroundColor = color;

    // 2) Saare buttons se .active class hata do
    themeButtons.forEach(btn => btn.classList.remove("active"));

    // 3) Jis button ko click kiya → uspe .active add karo
    button.classList.add("active");
  });
});
