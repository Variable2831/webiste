---
title: "Contact"
permalink: "/contact/"
layout: page
---

# Contact Us

## Contact Form

Please fill out the form below to get in touch with us.

<form id="contact-form" action="https://formspree.io/f/mvoeejzy" method="POST">
  **Name:**
  <input type="text" id="name" name="name" required>

  **Email:**
  <input type="email" id="email" name="email" required>

  **Message:**
  <textarea id="message" name="message" required></textarea>

  <!-- Honeypot field -->
  <input type="text" name="_honeypot" style="display:none">

  <!-- reCAPTCHA token field -->
  <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">

  <button type="submit">Submit</button>
</form>

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

## Main Content

This is where the main content of the page would go. You can add any other information here that is relevant to your website or the specific page.
