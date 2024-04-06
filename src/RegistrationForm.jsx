import React, { useState } from 'react';

const RegistrationForm = () => {
  // State variables for form fields and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [town, setTown] = useState('');
  const [region, setRegion] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState({});

  // Function to validate form inputs
  const validate = () => {
    let errors = {};

    // Email validation
    if (!email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    // Password validation
    if (!password) {
      errors.password = 'Password is required';
    }

    // Retype password validation
    if (password !== retypePassword) {
      errors.retypePassword = 'Passwords do not match';
    }

    // First name validation
    if (!firstName) {
      errors.firstName = 'First name is required';
     } else if (firstName.length > 4) {
        errors.firstName = 'First name must be 4 characters or less';
      }

    // Last name validation
    if (!lastName) {
      errors.lastName = 'Last name is required';
    } else if (lastName.length > 4) {
        errors.lastName = 'Last name must be 4 characters or less';
      }

    // Phone number validation
    if (!phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }

    // Town validation
    if (!town) {
      errors.town = 'Town is required';
    }

    // Region validation
    if (!region) {
      errors.region = 'Region is required';
    }

    // Zip code validation
    if (!zipCode) {
      errors.zipCode = 'Zip code is required';
    }

    // Country validation
    if (!country) {
      errors.country = 'Country is required';
    }

    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic here
      console.log('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Register Here</h2>
      <h3>User Registration *</h3>
      <p><span  style={{ color: 'red' }}>*</span>  marked fields are required</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="retypePassword">Retype Password <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="password"
            id="retypePassword"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          {errors.retypePassword && <p>{errors.retypePassword}</p>}
        </div>
        <div>
          <label htmlFor="firstName">First Name <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div>
          <label htmlFor="town">Town <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="text"
            id="town"
            value={town}
            onChange={(e) => setTown(e.target.value)}
          />
          {errors.town && <p>{errors.town}</p>}
        </div>
        <div>
          <label htmlFor="region">Region <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="text"
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          {errors.region && <p>{errors.region}</p>}
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code <span  style={{ color: 'red' }}>*</span>:</label>
          <input
            type="text"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          {errors.zipCode && <p>{errors.zipCode}</p>}
        </div>
        <div>
          <label htmlFor="country">Country <span  style={{ color: 'red' }}>*</span>:</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            {/* Add more countries as needed */}
          </select>
          {errors.country && <p>{errors.country}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
