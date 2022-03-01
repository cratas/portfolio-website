import React from "react";

import { Form } from "react-bootstrap";
import MyButton from "../../UI/MyButton";

import commonClasses from "./CommonContentContainer.module.css";
import classes from "./ContactContainer.module.css";

const ContactContainer = () => {
  return (
    <section className={` ${commonClasses.contentWrapper} ${classes.contactWrapper}`} id="contact">
      <div data-aos="fade-up" className={commonClasses.titleWrapper}>
        <h2>{"> "}Get in touch</h2>
        {/* <h2>GET IN TOUCH</h2> */}
      </div>

      {/* <p>Get in touch!</p> */}
      <p data-aos="fade-up" >
        I'm currently looking for new <span className={commonClasses.highlight}>challenges </span> 
        and <span className={commonClasses.highlight}>opportunities</span>. If you are
        interested or you would like to ask me something don't hesitate to
        <span className={commonClasses.highlight}> contact me</span>.
      </p>

      <Form className={classes.contactForm}  >
        <Form.Group className="mb-3" controlId="formBasicEmail" data-aos="fade-up">
          <Form.Control type="email" placeholder="Name" className={classes.formInput}/>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" data-aos="fade-up">
          <Form.Control type="password" placeholder="Email" className={classes.formInput}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" data-aos="fade-up">
          <Form.Control as="textarea" rows={4} placeholder="Your message" className={classes.formInput}/>
        </Form.Group>

        <Form.Group className="mb-3"  data-aos="fade-up">
          <MyButton type="filled" customStyle={classes.formButton}>Click to send</MyButton>
        </Form.Group>
      </Form>
    </section>
  );
};

export default ContactContainer;
