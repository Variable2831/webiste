---
title: "Contact"
permalink: "/contact/"
layout: page
---

# Contact Us

<div style="max-width: 600px; margin: 0 auto; background-color: #1e1e1e; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
  <form id="contact-form" action="https://formspree.io/f/mvoeejzy" method="POST">
    <label for="name" style="color: #ffffff; font-weight: bold;">Name:</label>
    <input type="text" id="name" name="name" required style="width: 100%; padding: 15px; margin-bottom: 15px; border: 1px solid #444; border-radius: 5px; background-color: #333; color: #e0e0e0; box-sizing: border-box;">

    <label for="email" style="color: #ffffff; font-weight: bold;">Email:</label>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 15px; margin-bottom: 15px; border: 1px solid #444; border-radius: 5px; background-color: #333; color: #e0e0e0; box-sizing: border-box;">

    <label for="message" style="color: #ffffff; font-weight: bold;">Message:</label>
    <textarea id="message" name="message" required style="width: 100%; padding: 15px; margin-bottom: 15px; border: 1px solid #444; border-radius: 5px; background-color: #333; color: #e0e0e0; box-sizing: border-box; height: 150px; resize: none; overflow-y: auto;"></textarea>

    <!-- Honeypot field -->
    <input type="text" name="_honeypot" style="display: none;">

    <!-- reCAPTCHA token field -->
    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">

    <button type="submit" style="width: 100%; padding: 15px; background-color: #8A2BE2; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">Submit</button>
  </form>
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

## Main Content

This is where the main content of the page would go. You can add any other information here that is relevant to your website or the specific page.
