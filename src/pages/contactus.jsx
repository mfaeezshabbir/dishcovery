import { useState } from "react";
import ContactPage from "../components/contactus";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data) => {
    setSubmitting(true);
    const response = await fetch("../api/contactusapi.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setSubmitting(false);

    if (response.ok) {
      setSuccess(true);
    }
  };

  const handleReset = () => {
    setSuccess(false);
  };

  return (
    <ContactPage
      onSubmit={handleSubmit}
      submitting={submitting}
      success={success}
      onReset={handleReset}
    />
  );
};

export default Contact;
