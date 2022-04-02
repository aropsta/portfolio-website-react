import React, { useState, useEffect } from "react";
import FormInput from "./FormInput";

import emailjs from "@emailjs/browser";
import "../styles/form-input.scss";
import { BarLoader } from "react-spinners";
import "../styles/loading.css";

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submitted) sendEmail();
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const sendEmail = () => {
    submitForm(true);
    setLoading(true);
    emailjs.send("service_jg9eb2q", "template_73aayf3", values, "vRPeubQbjqke4IyjA").then(
      (response) => {
        console.log("SUCCESS", response);
        setSucess(true);
        setLoading(false);
      },
      (error) => {
        console.log("FAILED...", error);
        setSucess(false);
        setLoading(false);
      }
    );
  };

  // useEffect(() => {
  //   if (submitted) setLoading(true);
  // }, [submitted]);

  const resultP = () => {
    if (submitted && !loading) {
      if (success) {
        return (
          <div className="sent blur">
            <p className="success">Sent successfully!</p>
          </div>
        );
      }
      if (!success) {
        console.log("FAILED!");
        return (
          <div className="sent blur">
            <p className="fail">Failed! Something went wrong!</p>
          </div>
        );
      }
    } else return <></>;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* {validForm && submitted ? <p className="sent">Sent successfully!</p> : <></>} */}{" "}
      <h2 aria-label="Contact me">Contact me</h2>{" "}
      <p className="required">
        Required fields are followed by <abbr title="required">*</abbr>{" "}
      </p>
      {resultP()}
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
      {submitted && loading && (
        <BarLoader
          speedMultiplier={2}
          color="#FFCC00"
          width="50%"
          height="5px"
          loading={true}
          css="align-self: center; position: absolute; bottom: 1%; left:50%; transform: translate(-50%);"
        />
      )}
    </form>
  );
};

export default Form;

//   <FormInput
//     key={input.id}
//     {...input}
//     value={values[input.name as keyof formData]}></FormInput>;
// })}
