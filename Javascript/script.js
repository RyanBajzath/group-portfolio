document.addEventListener("DOMContentLoaded", () => {
  // Grabbing nodes
  const modal = document.getElementById("nameModal");
  const closeModal = document.querySelector(".close");
  const nameForm = document.getElementById("nameForm");
  const userNameInput = document.getElementById("userName");
  const greetingElement = document.querySelector(".greeting");
  const experienceHeading = document.getElementById("experienceHeading");
  const hobbiesHeading = document.getElementById("hobbiesHeading");

  // Function to get the greeting based on local time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  // Check if a name is already stored in session storage
  const storedName = sessionStorage.getItem("userName");

  if (storedName) {
    // Update greeting with the user's name
    if (greetingElement) {
      greetingElement.textContent = `${getGreeting()}, ${storedName}!`;
    }
    if (modal) {
      modal.style.display = "none";
    }

    // Update the Experience page heading if it exists
    if (experienceHeading) {
      experienceHeading.textContent = `Check out our experiences, ${storedName}!`;
    }
    // Update the Hobbies page heading if it exists
    if (hobbiesHeading) {
      hobbiesHeading.textContent = `${storedName}, Check out our fun hobbies `;
    }
  } else if (modal) {
    modal.style.display = "flex";
  }

  // Handle form submission for the modal
  if (nameForm) {
    nameForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent default form submission
      const userName = userNameInput.value.trim();

      if (userName) {
        sessionStorage.setItem("userName", userName);

        // Update greeting with the user's name
        if (greetingElement) {
          greetingElement.textContent = `${getGreeting()}, ${userName}!`;
        }

        // Update the Experience page heading dynamically
        if (experienceHeading) {
          experienceHeading.textContent = `Check out our experiences, ${userName}!`;
        }

        modal.style.display = "none";
      }
    });
  }

  // Close modal when the "X" button is clicked
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Populate the name input in the About Us page if the name exists in session storage
  const nameInput = document.getElementById("name");
  if (nameInput && storedName) {
    nameInput.value = storedName; // Set the value of the input
  }
});

// About Us Form Validation
function contactFormHandle(event) {
  event.preventDefault();

  // Select form inputs and error message spans
  const emailInput = document.querySelector("#email");
  const userNameInput = document.querySelector("#name");
  const messageInput = document.querySelector("#message");

  const emailError = document.querySelector("#emailError");
  const userNameError = document.querySelector("#nameError");
  const messageError = document.querySelector("#messageError");

  let isFormValid = true;

  // Clear previous error messages
  emailError.textContent = "";
  userNameError.textContent = "";
  messageError.textContent = "";

  // Validate email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address.";
    isFormValid = false;
  }

  // Validate name
  if (userNameInput.value.trim() === "") {
    userNameError.textContent = "Name is required.";
    isFormValid = false;
  }

  // Validate message
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isFormValid = false;
  }

  // If form is valid, submit or handle data
  if (isFormValid) {
    console.log("Form submitted successfully!");
    alert("Form submitted successfully!");

    // Clear form fields
    emailInput.value = "";
    userNameInput.value = "";
    messageInput.value = "";

    // Clear error messages
    emailError.textContent = "";
    userNameError.textContent = "";
    messageError.textContent = "";
  }
}

// Real-time validation for inputs in the About Us page
document.querySelector("#name").addEventListener("input", () => {
  const userNameError = document.querySelector("#nameError");
  const userNameInput = document.querySelector("#name");
  if (userNameInput.value.trim() === "") {
    userNameError.textContent = "Name is required.";
  } else {
    userNameError.textContent = "";
  }
});

document.querySelector("#email").addEventListener("input", () => {
  const emailError = document.querySelector("#emailError");
  const emailInput = document.querySelector("#email");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    emailError.textContent = "Invalid email address.";
  } else {
    emailError.textContent = "";
  }
});

document.querySelector("#message").addEventListener("input", () => {
  const messageError = document.querySelector("#messageError");
  const messageInput = document.querySelector("#message");
  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
  } else {
    messageError.textContent = "";
  }
});
