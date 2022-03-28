import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

import emailjs from "@emailjs/browser";
import "../styles/form-input.scss";

interface formData {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
} as formData;

const Form = () => {
  const inputs = [
    {
      id: 0,
      name: "name",
      type: "text",
      label: "Name",
      placeholder: "Full name",
      required: true,
      errorMessage: "Please enter your full name",
    },
    {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Email address",
      required: true,
      errorMessage: "Please enter a valid email address",
    },

    {
      id: 2,
      name: "phone",
      type: "tel",
      label: "Phone",
      placeholder: "Phone number",
    },
    {
      id: 3,
      name: "company",
      type: "text",
      label: "Company",
      placeholder: "Company",
    },
    {
      id: 4,
      name: "message",
      type: "textarea",
      label: "Message",
      placeholder: "Message",
      required: true,
      errorMessage: "Enter a message you'd like to send",
    },
  ];

  const [values, setValues] = useState(initialFormState);
  const [submitted, submitForm] = useState(false);
  const [success, setSucess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitted) sendEmail();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const sendEmail = () => {
    console.log("SENT!");
    submitForm(true);
    emailjs.send("service_jg9eb2q", "template_73aayf3", values, "vRPeubQbjqke4IyjA").then(
      (response) => {
        console.log("SUCCESS", response);
        setSucess(true);
      },
      (error) => {
        console.log("FAILED...", error);
        setSucess(false);
      }
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* {validForm && submitted ? <p className="sent">Sent successfully!</p> : <></>} */}{" "}
      <h2 aria-label="Contact me">Get in touch</h2>{" "}
      <p className="required">
        Required fields are followed by <abbr title="required">*</abbr>{" "}
      </p>
      {submitted && success && <p className="sent">Sent successfully!</p>}
      {inputs.map((input) => {
        return (
          <FormInput
            {...input}
            key={input.id}
            value={values[input.name]}
            onChange={handleChange}></FormInput>
        );
      })}
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;

//   <FormInput
//     key={input.id}
//     {...input}
//     value={values[input.name as keyof formData]}></FormInput>;
// })}
