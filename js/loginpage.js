    // Toggle between login and signup forms
    function showSignUp() {
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('signup-form').classList.add('active');
    }

    function showLogin() {
        document.getElementById('signup-form').classList.remove('active');
        document.getElementById('login-form').classList.add('active');
    }

    // Dummy login function
    function login() {
        var username = document.getElementById('login-username').value;
        var password = document.getElementById('login-password').value;
        var loginError = document.getElementById('login-error');

        // Dummy validation
        if (username === "" || password === "") {
            loginError.textContent = "Please fill in all fields.";
        } else {
            loginError.textContent = "";
            alert('Logged in successfully!');
        }
    }

    // Dummy sign-up function
    function signUp() {
        var username = document.getElementById('signup-username').value;
        var email = document.getElementById('signup-email').value;
        var password = document.getElementById('signup-password').value;
        var confirmPassword = document.getElementById('signup-confirm-password').value;
        var signupError = document.getElementById('signup-error');

        // Dummy validation
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            signupError.textContent = "Please fill in all fields.";
        } else if (password !== confirmPassword) {
            signupError.textContent = "Passwords do not match.";
        } else {
            signupError.textContent = "";
            alert('Account created successfully!');
        }
    }