import classes from "./ContactForm.module.css";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [sentStatus, setSentStatus] = useState("Send a Message");
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [subject, setSubject] = useState("");
  const [errorSubject, setErrorSubject] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  function nameOnChangeHandler(e) {
    setName((curr) => e.target.value);
  }

  function emailOnChangeHandler(e) {
    setEmail((curr) => e.target.value);
  }

  function subjectOnChangeHandler(e) {
    setSubject((curr) => e.target.value);
  }

  function messageOnChangeHandler(e) {
    setMessage((curr) => e.target.value);
  }

  useEffect(() => {
    if (!(name.length < 2)) {
      setErrorName((curr) => false);
    }
    if (!(email.length < 2 || !email.includes("@") || !email.includes("."))) {
      setErrorEmail((curr) => false);
    }
    if (!(subject.length == 0)) {
      setErrorSubject((curr) => false);
    }
    if (!(message.length == 0)) {
      setErrorMessage((curr) => false);
    }
  }, [name, email, subject, message]);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name.length < 2) {
      setErrorName((curr) => true);
      return;
    }

    if (email.length < 2 || !email.includes("@") || !email.includes(".")) {
      setErrorEmail((curr) => true);
      return;
    }

    if (subject.length < 1) {
      setErrorSubject((curr) => true);
      return;
    }

    if (message.length < 1) {
      setErrorMessage((curr) => true);
      return;
    }

    emailjs
      .sendForm(
        "service_ikt17p5",
        "template_8rplgt9",
        form.current,
        "S9U9Gkg_A6OyWLSji"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName((curr) => "");
          setEmail((curr) => "");
          setSubject((curr) => "");
          setMessage((curr) => "");
          setSentStatus((current) => "Sent");
          setTimeout(() => {
            setSentStatus((current) => "Send a Message");
          }, 2000);
        },
        (error) => {
          console.log(error.text);
          setSentStatus((current) => "Error");
          setTimeout(() => {
            setSentStatus((current) => "Send a Message");
          }, 2000);
        }
      );
  };
  return (
    <footer className={classes.footer}>
      <form ref={form} onSubmit={sendEmail} className={classes.form}>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out through this form or any of the social media
          accounts.
        </p>
        <span className={classes.inputContainer}>
          <input
            className={
              classes.input + (errorName ? " " + classes.inputError : "")
            }
            type="text"
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={nameOnChangeHandler}
          />

          <input
            className={
              classes.input + (errorEmail ? " " + classes.inputError : "")
            }
            type="text"
            name="user_email"
            placeholder="E-mail"
            value={email}
            onChange={emailOnChangeHandler}
          />

          <input
            className={
              classes.input +
              " " +
              classes.subject +
              (errorSubject ? " " + classes.inputError : "")
            }
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={subjectOnChangeHandler}
          />

          <textarea
            className={
              classes.textArea + (errorMessage ? " " + classes.inputError : "")
            }
            name="message"
            rows="4"
            cols="50"
            placeholder="Message"
            value={message}
            onChange={messageOnChangeHandler}
          ></textarea>
          <button className={classes.btn} type="submit">
            <span>{sentStatus}</span>
          </button>
        </span>
      </form>
    </footer>
  );
}

export default ContactForm;
