import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <footer className={classes.footer}>
      <form className={classes.form}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out through this form or any of the social media accounts.</p>
        <span className={classes.inputContainer}>
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="Name"
          />

          <input
            className={classes.input}
            type="text"
            name="email"
            placeholder="E-mail"
          />

          <input
            className={classes.input + " " + classes.subject}
            type="text"
            name="subject"
            placeholder="Subject"
          />

          <textarea
            className={classes.textArea}
            name="message"
            rows="4"
            cols="50"
            placeholder="Message"
          ></textarea>
          <button className={classes.btn} type="submit"><span>Send a Message</span></button>
        </span>
      </form>
    </footer>
  );
}

export default ContactForm;
