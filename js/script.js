const menuButton = document.getElementById("btn-menu");
const closeButton = document.getElementById("btn-close");
const mysidenav = document.getElementById("mysidenav");
const uptodateCheckbox = document.getElementById("uptodate-checkbox");
const btnSubmit = document.querySelector(".btn-submit");
const emailInput = document.getElementById("emailId");

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

// form validation
function validateEmail(e, x) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let elementvalue = x.value;

  if (elementvalue == "") {
    e.preventDefault();
    x.style.color = "var(--color-red)";
    x.style.borderColor = "var(--color-red)";
    x.nextElementSibling.textContent = "This field can't be empty";
  } else if (!elementvalue.match(mailformat) && elementvalue != "") {
    e.preventDefault();
    x.style.color = "var(--color-red)";
    x.style.borderColor = "var(--color-red)";
    document.contactForm.emailId.focus();
    x.nextElementSibling.textContent = "Enter an email address";
  } else if (x.value.match(mailformat)) {
    x.style.color = "";
    x.style.borderColor = "";
    document.contactForm.emailId.focus();
    x.nextElementSibling.textContent = "";
  }
}

if (btnSubmit) {
  btnSubmit.addEventListener("click", function (e) {
    return validateEmail(e, emailInput);
  });
}

if (emailInput) {
  emailInput.addEventListener("keyup", function (e) {
    return validateEmail(e, emailInput);
  });

  emailInput.addEventListener("blur", function () {
    emailInput.style.color = "";
    emailInput.style.borderColor = "";
    document.contactForm.emailId.focus();
    emailInput.nextElementSibling.textContent = "";
  });
}
