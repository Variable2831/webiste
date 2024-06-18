---
title: "Contact"
permalink: "/contact/"
layout: page
---

<style>
    .contact-form {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .contact-form h2 {
        margin-bottom: 20px;
        font-size: 24px;
        text-align: center;
    }
    .contact-form label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    .contact-form input[type="text"],
    .contact-form input[type="email"],
    .contact-form textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .contact-form button {
        width: 100%;
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
    .contact-form button:hover {
        background-color: #45a049;
    }
    .hidden-field {
        display: none;
    }
</style>

<div class="contact-form">
    <h2>Contact Us</h2>
    <form action="https://formspree.io/f/mvoeejzy" method="POST">
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
