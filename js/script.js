const menuButton = document.getElementById("btn-menu");
const closeButton = document.getElementById("btn-close");
const mysidenav = document.getElementById("mysidenav");
const uptodateCheckbox = document.getElementById("uptodate-checkbox");

// For form validation
const contactForm = document.querySelector(".contact-form");
const elemsToValidate = document.querySelectorAll(".to-validate");
const btnSubmit = document.querySelector(".btn-submit");

// Mobile navigation
let sidenavState = false;
menuButton.addEventListener("click", function () {
  if (!sidenavState) {
    mysidenav.style.transform = "translateX(0)";
    sidenavState = true;
  }
});

closeButton.addEventListener("click", function () {
  if (sidenavState) {
    mysidenav.style.transform = "translateX(100%)";
    sidenavState = false;
  }
});

// Contact page checkbox

let checkboxState = false;

if (uptodateCheckbox) {
  uptodateCheckbox.addEventListener("click", function (e) {
    if (checkboxState) {
      uptodateCheckbox.setAttribute("value", false);
      checkboxState = false;
    } else {
      uptodateCheckbox.setAttribute("value", true);
      checkboxState = true;
    }
  });
}

// FORM VALIDATION
function validateForm(e) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  elemsToValidate.forEach((element) => {
    if (element.value == "") {
      e.preventDefault();
      if (element.nextElementSibling) {
        element.parentElement.removeChild(element.nextElementSibling);
      }
      element.parentElement.insertAdjacentHTML(
        "beforeend",
        "<p class='input-error-msg'>This field can't be empty</p>"
      );
      element.style.color = "var(--color-red)";
      element.style.borderColor = "var(--color-red)";
    }

    if (element.id == "emailId" && element.value != "") {
      if (!element.value.match(mailformat)) {
        e.preventDefault();
        element.parentElement.insertAdjacentHTML(
          "beforeend",
          "<p class='input-error-msg'>Please use valid email</p>"
        );
      }
    }
  });
}

if (btnSubmit) {
  btnSubmit.addEventListener("click", (e) => validateForm(e, elemsToValidate));
}

if (contactForm) {
  contactForm.addEventListener("click", function (e) {
    if (e.target.classList.contains("to-validate")) {
      if (e.target.nextElementSibling) {
        e.target.parentElement.removeChild(e.target.nextElementSibling);
      }
      e.target.style.color = "";
      e.target.style.borderColor = "";
    }
  });
}
