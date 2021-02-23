import React from "react";

const Contact = () => {
  return (
    <section class="s2">
      <div class="main-container">
        <a href=""></a>
        <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

        <form id="contact-form">
          <a name="contact"></a>

          <label>Name</label>
          <input class="input-field" type="text" name="name" />

          <label>Subject</label>
          <input class="input-field" type="text" name="subject" />

          <label>Email</label>
          <input class="input-field" type="text" name="email" />

          <label>Message</label>
          <textarea class="input-field" name="message"></textarea>

          <input id="submit-btn" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
