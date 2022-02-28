import React from "react";

import { Form } from "react-bootstrap";
import MyButton from "../../UI/MyButton";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <section className={commonClasses.contentWrapper} id="contact">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}Get in touch</h2>
      </div>

      {/* <p>Get in touch!</p> */}
      <p>
        I'm currently looking for new challenges and opportunities. If you are
        interested or you would like to ask me something don't hesitate to
        contact me.
      </p>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <MyButton>Send</MyButton>
      </Form>
    </section>
  );
};

export default ContactContainer;
