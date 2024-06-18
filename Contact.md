---
title: "Contact"
permalink: "/contact/"
layout: page
---

<style>
    body {
        background-color: #121212;
        color: #e0e0e0;
        font-family: Arial, sans-serif;
    }
    .contact-form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #1e1e1e;
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
</style>

<div class="contact-form">
    <h2>Contact Us</h2>
    <form action="https://formspree.io/f/mnqkwvlv" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <!-- Honeypot field -->
        <input type="text" name="_honeypot" class="hidden-field">

        <button type="submit">Submit</button>
    </form>
</div>
