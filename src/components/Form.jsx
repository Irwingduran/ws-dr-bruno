import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    country: 'United States',
    zipCode: '',
    language: '',
    procedure: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-6">Formulario de Contacto</h2>

      {/* Full Name */}
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block text-gray-700">First Name *</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border rounded-md"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700">Last Name *</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700">Email *</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Type your email"
          required
        />
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number *</label>
        <input 
          type="text" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter Phone Number"
          required
        />
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="block text-gray-700">Country *</label>
        <select 
          name="country" 
          value={formData.country} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          required
        >
          <option value="United States">United States</option>
          <option value="Mexico">Mexico</option>
          <option value="Canada">Canada</option>
          {/* Agregar más países según sea necesario */}
        </select>
      </div>

      {/* Zip Code */}
      <div className="mb-4">
        <label className="block text-gray-700">Zip Code *</label>
        <input 
          type="text" 
          name="zipCode" 
          value={formData.zipCode} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter Zip Code"
          required
        />
      </div>

      {/* Preferred Language */}
      <div className="mb-4">
        <label className="block text-gray-700">Preferred Language *</label>
        <select 
          name="language" 
          value={formData.language} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          required
        >
          <option value="">Choose Your Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          {/* Agregar más idiomas según sea necesario */}
        </select>
      </div>

      {/* Procedure */}
      <div className="mb-4">
        <label className="block text-gray-700">What procedure are you interested in? *</label>
        <select 
          name="procedure" 
          value={formData.procedure} 
          onChange={handleChange} 
          className="w-full px-4 py-2 border rounded-md"
          required
        >
          <option value="">Choose a procedure</option>
          <option value="Procedure 1">Procedure 1</option>
          <option value="Procedure 2">Procedure 2</option>
          {/* Agregar más procedimientos según sea necesario */}
        </select>
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
