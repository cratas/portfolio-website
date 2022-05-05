import React, { useState, useEffect } from "react";
import useInput from "../../../../hooks/use-input";
import emailjs from "emailjs-com";

import { Form } from "react-bootstrap";
import MyButton from "../../UI/MyButton";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./ContactContainer.module.css";

const ContactContainer = () => {
  const [isEmailSentMessageVisibile, setIsEmailSentMessageVisibile] =
    useState(false);

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChanged,
    inputBlurHandler: nameBlured,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChanged,
    inputBlurHandler: emailBlured,
    reset: emailReset,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChanged,
    inputBlurHandler: messageBlured,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsEmailSentMessageVisibile(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isEmailSentMessageVisibile]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      nameBlured();
      emailBlured();
      messageBlured();

      return;
    }

    emailjs
      .sendForm(
        "service_q998k6p",
        "template_gjr5vmk",
        event.target,
        "qajZ6u7otyXQamiGv"
      )
      .then(
        (result) => {
          setIsEmailSentMessageVisibile(true);

          nameReset();
          emailReset();
          messageReset();
        },
        (error) => {
          console.log(error.text);
          return;
        }
      );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("petr8kratochvil@seznam.cz");
  }

  return (
    <section
      className={` ${commonClasses.contentWrapper} ${classes.contactWrapper}`}
      id="contact"
    >
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>GET IN TOUCH</h2>
      </div>

      {/* <p>Get in touch!</p> */}
      <p data-aos="fade-up">
        I'm currently looking for new{" "}
        <span className={commonClasses.highlight}>challenges </span>
        and <span className={commonClasses.highlight}>opportunities</span>. If
        you are interested or you would like to ask me something don't hesitate
        to
        <span className={commonClasses.highlight}> contact me</span>.<br />
        <span style={{ color: "var(--color-blue)" }}>
          Or{" "}
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              textUnderlineOffset: "5px",
              cursor: "pointer"
            }}
            onClick={handleCopyEmail}
          >
            copy
          </span>{" "}
          my Email address.
        </span>
      </p>

      <Form className={classes.contactForm} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" data-aos="fade-up">
          <Form.Control
            name="name"
            value={name}
            placeholder="Name"
            className={classes.formInput}
            onChange={nameChanged}
            onBlur={nameBlured}
            autoComplete="ignore"
          />
          {nameHasError && (
            <Form.Text className={`text-muted ${classes.errorMessage}`}>
              Please provide a name.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" data-aos="fade-up">
          <Form.Control
            name="email"
            value={email}
            placeholder="Email"
            className={classes.formInput}
            onChange={emailChanged}
            onBlur={emailBlured}
            autoComplete="new-password"
          />
          {emailHasError && (
            <Form.Text className={`text-muted ${classes.errorMessage}`}>
              Please provide a properly formatted email address.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" data-aos="fade-up">
          <Form.Control
            value={message}
            as="textarea"
            rows={4}
            name="message"
            placeholder="Your message"
            className={classes.formInput}
            onChange={messageChanged}
            onBlur={messageBlured}
            autoComplete="new-password"
          />
          {messageHasError && (
            <Form.Text className={`text-muted ${classes.errorMessage}`}>
              Please enter your message.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" data-aos="fade-up">
          <MyButton
            type="submit"
            buttonType="filled"
            style={{ marginTop: "2rem" }}
          >
            Click to send
          </MyButton>
        </Form.Group>
        {isEmailSentMessageVisibile && (
          <Form.Text className={`text-muted ${classes.emailSentMessage}`}>
            Message successfully sent.
          </Form.Text>
        )}
      </Form>
    </section>
  );
};

export default ContactContainer;
