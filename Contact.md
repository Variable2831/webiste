---
title: "Contact"
permalink: "/contact/"
layout: page
---

<style>
    .container {
        display: flex;
        flex-direction: column; /* Changed to column for better stacking */
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
        gap: 40px; /* Add space between form and content */
    }
    .form-container {
        display: flex;
        flex-direction: row;
        gap: 40px;
    }
    .contact-form-container {
        flex: 1;
        background-color: #1e1e1e;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
    }
    .contact-form h2 {
        margin-bottom: 20px;
        font-size: 24px;
        text-align: center;
        color: #ffffff;
    }
    .contact-form label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #ffffff;
    }
    .contact-form input[type="text"],
    .contact-form input[type="email"],
    .contact-form textarea {
        width: 100%;
        padding: 15px;
        margin-bottom: 15px;
        border: 1px solid #444;
        border-radius: 5px;
        background-color: #333;
        color: #e0e0e0;
        box-sizing: border-box;
    }
    .contact-form textarea {
        height: 150px; /* Fixed height */
        resize: none; /* Prevent resizing */
        overflow-y: auto; /* Scrollable */
    }
    .contact-form button {
        width: 100%;
        padding: 15px;
        background-color: #8A2BE2; /* Purple */
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
    .contact-form button:hover {
        background-color: #7B1FA2; /* Darker purple */
    }
    .contact-form input[type="text"]:focus,
    .contact-form input[type="email"]:focus,
    .contact-form textarea:focus {
        border-color: #8A2BE2; /* Purple hint */
        outline: none;
    }
    .hidden-field {
        display: none;
    }
    .main-content {
        flex: 1;
        padding: 20px;
        background-color: #1e1e1e;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        color: #ffffff;
    }
    iframe {
        width: 100%; /* Ensure iframe takes full width */
        border: none;
    }
</style>

<div class="container">
    <div class="form-container">
        <div class="contact-form-container">
            <div class="contact-form">
                <h2>Contact Us</h2>
                <form id="contact-form" action="https://formspree.io/f/mvoeejzy" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <!-- Honeypot field -->
                    <input type="text" name="_honeypot" class="hidden-field">

                    <!-- reCAPTCHA token field -->
                    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        <div class="main-content">
            <h1>Main Content</h1>
            <p>This is where the main content of the page would go. You can add any other information here that is relevant to your website or the specific page.</p>
        </div>
    </div>
    
    <h1>Subscribe to Our Newsletter</h1>
    <!-- Embedded Google Form -->
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQdGCk9xtfQkmDiV8il_z-iktyywi2t0SR2R3RV01h4uoQ3A/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>

<script src="https://www.google.com/recaptcha/api.js?render=6LdVw_spAAAAANE27bmDhcF_seK-HVWFB5cWHZEa"></script>
<script>
    grecaptcha.ready(function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            grecaptcha.execute('6LdVw_spAAAAANE27bmDhcF_seK-HVWFB5cWHZEa', {action: 'submit'}).then(function(token) {
                document.getElementById('g-recaptcha-response').value = token;
                document.getElementById('contact-form').submit();
            });
        });
    });
</script>
