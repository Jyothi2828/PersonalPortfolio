document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Event listener for name input on blur
    nameInput.addEventListener('blur', function() {
        const name = nameInput.value.trim(); // Trim leading and trailing spaces
        nameInput.value = sanitizeNameInput(name); // Sanitize input to remove consecutive spaces
        const error = validateName(name);
        showPopup(nameInput, error);
    });

    // Event listener for input in name field
    nameInput.addEventListener('input', function() {
        const name = nameInput.value.trim(); // Trim leading and trailing spaces
        nameInput.value = sanitizeNameInput(name); // Sanitize input to remove consecutive spaces
        const error = validateName(name);
        showPopup(nameInput, error);
    });

    // Event listener for email input on blur
    emailInput.addEventListener('blur', function() {
        const email = emailInput.value.trim();
        const error = validateEmail(email);
        showPopup(emailInput, error);
    });

    // Event listener for input in email field
    emailInput.addEventListener('input', function() {
        const email = emailInput.value.trim();
        const error = validateEmail(email);
        showPopup(emailInput, error);
    });

    // Event listener for message input on blur
    messageInput.addEventListener('blur', function() {
        const message = messageInput.value.trim();
        if (message === '') {
            showPopup(messageInput, 'Message is required.');
        } else if (message.length < 10) {
            showPopup(messageInput, 'Message must be at least 10 characters long.');
        } else {
            showPopup(messageInput, '');
        }
    });

    // Function to sanitize name input (remove consecutive spaces)
    function sanitizeNameInput(value) {
        // Replace consecutive spaces with a single space
        return value.replace(/\s+/g, ' ');
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = nameInput.value.trim(); // Trim leading and trailing spaces
        nameInput.value = sanitizeNameInput(name); // Sanitize input to remove consecutive spaces
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        let isValid = true;

        const nameError = validateName(name);
        if (nameError) {
            isValid = false;
            showPopup(nameInput, nameError); // Show error popup on form submit
        }

        const emailError = validateEmail(email);
        if (emailError) {
            isValid = false;
            showPopup(emailInput, emailError); // Show error popup on form submit
        }

        if (message === '') {
            isValid = false;
            showPopup(messageInput, 'Message is required.'); // Show error popup on form submit
        } else if (message.length < 10) {
            isValid = false;
            showPopup(messageInput, 'Message must be at least 10 characters long.'); // Show error popup on form submit
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase()) ? '' : 'Please enter a valid email address.';
    }

    // Function to validate name format
    function validateName(name) {
        const re = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
        if (!re.test(name)) {
            return 'Name must contain only alphabets and single spaces between words.';
        } else if (name.trim().length < 3) {
            return 'Name must be at least 3 characters long.';
        }
        return '';
    }

    // Function to display error popup message
    // Function to display error popup message
// Function to display error popup message
function showPopup(input, message) {
    const errorLabel = document.querySelector(`[for="${input.id}"]`);
    const errorContainer = errorLabel.nextElementSibling; // Container for error messages

    if (message) {
        // Display error message
        if (!errorContainer || !errorContainer.classList.contains('error-message')) {
            // Create error message element if not exists
            const errorMessage = document.createElement('span');
            errorMessage.className = 'error-message';
            errorMessage.textContent = message;
            errorLabel.parentNode.insertBefore(errorMessage, errorLabel.nextElementSibling);
        } else {
            // Update existing error message
            errorContainer.textContent = message;
        }

        // Add error class to label
        errorLabel.classList.add('error-label');
    } else {
        // Clear error message
        if (errorContainer && errorContainer.classList.contains('error-message')) {
            errorContainer.textContent = ''; // Clear existing error message
        }

        // Remove error class from label
        errorLabel.classList.remove('error-label');

        // Temporarily show green color for success
        errorLabel.classList.add('success-label');
        setTimeout(() => {
            errorLabel.classList.remove('success-label');
        }, 2000); // Reset to default after 2 seconds
    }
}
});