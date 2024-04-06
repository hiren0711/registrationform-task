import React, { useState } from "react";
import "./style.css";

const useFormValidation = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    retypePassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    town: "",
    region: "",
    zipCode: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^.{4,}$/;
    const phoneNumberRegex = /^\d{10}$/;
    const zipCodeRegex = /^\d{5}$/;

    // Check if email is valid
    if (!values.email || !emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    // Add validation for password
    if (!values.password) {
      errors.password = "Please enter a password";
    }
    // Add validation for retype password
    if (values.password !== values.retypePassword) {
      errors.retypePassword = "Passwords do not match";
    }
    // Check if username length is less than or equal to 4 characters
    if (!values.firstName || !usernameRegex.test(values.firstName)) {
      errors.firstName = "Username must be 4 characters or more";
    }
    // Add validation for lastname
    if (!values.lastName) {
      errors.lastName = "Please enter a lastName";
    }
    // Add validation for phoneNumber
    if (!values.phoneNumber || !phoneNumberRegex.test(values.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number (10 digits)";
    }
    // Add validation for address
    if (!values.address) {
      errors.address = "Please enter a address";
    }
    // Add validation for region
    if (!values.region) {
      errors.region = "Please enter a region";
    }
    // Add validation for zipCode
    if (!values.zipCode || !zipCodeRegex.test(values.zipCode)) {
      errors.zipCode = "Please enter a valid zip code (5 digits)";
    }
    // Check if country is selected
    if (!values.country) {
      errors.country = "Please select a country";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
      setValues({
        email: "",
        password: "",
        retypePassword: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        town: "",
        region: "",
        zipCode: "",
        country: "",
      });
      // Add your further logic here, like API calls or state updates
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };

  return { handleChange, handleSubmit, values, errors };
};

const RegistrationForm = () => {
  const { handleChange, handleSubmit, values, errors } = useFormValidation();

  return (
    <div>
      <div className="registration-container">
        <p className="grey">Register Here</p>
        <h2 className="dgrey">USER REGISTRATION </h2>
        <p className="grey">
          {" "}
          Fields marked <span style={{ color: "red" }}>*</span> are required
        </p>
        <form onSubmit={handleSubmit}>
          {/* Email section */}
          <div className="form-group">
            <label htmlFor="email">
              Email <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
            />
            <span>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </span>
          </div>

          {/* password section */}
          <div className="form-group">
            <label htmlFor="password">
              Password <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
            />
            <span>
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </span>
          </div>

          {/* retypepassword section */}
          <div className="form-group">
            <label htmlFor="retypePassword">
              Retype Password <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="retypePassword"
              value={values.retypePassword}
              onChange={handleChange}
            />
            <span>
              {errors.retypePassword && (
                <p className="error-message">{errors.retypePassword}</p>
              )}
            </span>
          </div>

          {/* firstname section */}
          <div className="form-group">
            <label htmlFor="firstName">
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <span>
              {errors.firstName && (
                <p className="error-message">{errors.firstName}</p>
              )}
            </span>
          </div>

          {/* lastname section */}
          <div className="form-group">
            <label htmlFor="lastName">
              Last Name <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <span>
              {errors.lastName && (
                <p className="error-message">{errors.lastName}</p>
              )}
            </span>
          </div>

          {/* phonenumber section */}
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            <span>
              {errors.phoneNumber && (
                <p className="error-message">{errors.phoneNumber}</p>
              )}
            </span>
          </div>

          {/* address section */}
          <div className="form-group">
            <label htmlFor="address">
              Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="address"
              value={values.address}
              onChange={handleChange}
            />
            <span>
              {errors.address && (
                <p className="error-message">{errors.address}</p>
              )}
            </span>
          </div>

          {/* town section */}
          <div className="form-group">
            <label htmlFor="town">Town</label>
            <input
              type="text"
              id="town"
              value={values.town}
              onChange={handleChange}
            />
          </div>

          {/* region section */}
          <div className="form-group">
            <label htmlFor="region">
              Region <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="region"
              value={values.region}
              onChange={handleChange}
            />
            <span>
              {errors.region && (
                <p className="error-message">{errors.region}</p>
              )}
            </span>
          </div>

          {/* zipcode section */}
          <div className="form-group">
            <label htmlFor="zipCode">
              Postcode / Zip <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="number"
              id="zipCode"
              value={values.zipCode}
              onChange={handleChange}
            />
            <span>
              {errors.zipCode && (
                <p className="error-message">{errors.zipCode}</p>
              )}
            </span>
          </div>

          {/* country section */}
          <div className="form-group">
            <label htmlFor="country">
              Country <span style={{ color: "red" }}>*</span>
            </label>
            <select id="country" value={values.country} onChange={handleChange}>
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="CA">Canada</option>
            </select>
            <span>
              {" "}
              {errors.country && (
                <p className="error-message">{errors.country}</p>
              )}
            </span>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
