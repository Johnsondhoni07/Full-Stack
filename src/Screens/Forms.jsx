/* eslint-disable default-case */

import React from "react";
import { useCallback, useEffect, useState } from "react";
import InputField from "../Components/InputField";

function Forms() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialData = {
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  };
  const [error, setError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setFormData(initialData);
    },
    [initialData]
  );

  const handleOnChange = useCallback(
    (e) => {
      console.log(e.target.value);
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const handleBlur = useCallback((e) => {
    switch (e.target.name) {
      case "name": {
        if (e.target.value === "") {
          setErrorMsg("Enter a Name");
        } else {
          setErrorMsg("");
        }
        break;
      }
      case "email": {
        if (e.target.value === "") {
          setErrorMsg("Enter an Email");
        } else if (!e.target.value.match(/\S+@\S+\.\S+/)) {
          setErrorMsg("Enter a valid Email");
        } else {
          setErrorMsg("");
        }
        break;
      }
    }
  }, []);

  useEffect(() => {
    if (errorMsg === "" && formData.name !== "" && formData.email !== "") {
      setError(false);
    } else {
      setError(true);
    }
  }, [formData, errorMsg]);

  console.log(errorMsg);

  return (
    <div>
      <div className="bg-success p-4">Logo</div>
      <form onSubmit={handleSubmit} className="container">
        <InputField
          type="text"
          placeholder="Enter Your Name"
          id="name"
          name="name"
          htmlFor="name"
          label="Name *"
          value={formData.name}
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
        <InputField
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          value={formData.email}
          htmlFor="email"
          label="Email Address *"
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
        <InputField
          type="number"
          placeholder="Enter Your Mobile Number"
          id="mobile"
          name="mobile"
          htmlFor="mobile"
          value={formData.mobile}
          label="Mobile Number"
          onChange={handleOnChange}
        />
        <InputField
          type="test"
          placeholder="Enter Your Country"
          value={formData.country}
          id="country"
          name="country"
          htmlFor="country"
          label="Country"
          onChange={handleOnChange}
        />
        <InputField
          type="texy"
          placeholder="Enter Your City"
          value={formData.city}
          id="city"
          name="city"
          htmlFor="city"
          label="City"
          onChange={handleOnChange}
        />
        <InputField
          type="text"
          placeholder="Enter Your State"
          id="state"
          value={formData.state}
          name="state"
          htmlFor="state"
          label="State"
          onChange={handleOnChange}
        />
        <InputField
          type="text"
          value={formData.message}
          placeholder="Enter Your Message"
          id="message"
          name="message"
          htmlFor="message"
          label="Message"
          className="exampleFormControlTextarea1"
          onChange={handleOnChange}
        />
        {errorMsg ? (
          <div style={{ backgroundColor: "#ff743d" }} className="rounded">
            <p className="px-4 py-1"> {errorMsg}</p>
          </div>
        ) : (
          ""
        )}
        <button type="submit" className="btn btn-success" disabled={error}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;
