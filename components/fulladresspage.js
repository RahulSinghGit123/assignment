import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Form() {
  const personal = {
    name: "",
    email: "",
    mobile: "",
  };
  const address = {
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
  };
  const attachment = {
    photo: "",
    signature: "",
    aadhar: "",
    tenth: "",
    twelth: "",
    cast: "",
    income: "",
    nivas: "",
  };

  const [personalData, setPersonalData] = useState(personal);
  const [addressData, setAddressData] = useState(address);
  const [attachmentData, setAttachmentData] = useState(attachment);
  const[value,setValue]=useState('')

  function handleChange(e) {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
    setAttachmentData({ ...attachmentData, [e.target.name]: e.target.value });
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  }

  const resetform = () => {
    setPersonalData("");
  };
  function handleSubmite(e) {
    e.preventDefault();
    if (
      !personalData.name ||
      !personalData.email ||
      !personalData.mobile ||
      !attachmentData.photo
    ) {
      alert("All fields are required");
    } else {
      setLast(true);
    }
    resetform();
  }

  return (
    <>
      <form
        className="border p-20 items-center my-10 lg:mx-40 space-y-6"
        onSubmit={handleSubmite}
        id="resetform"
      >
        <h1 className="bg-blue-700 text-white text-center text-3xl font-bold">Fill your details</h1>
        <div>
          <fieldset className="bg-zinc-50 border hover:border-black p-10 mx-2 rounded-lg">
            <legend className="text-xl">Personal Details:</legend>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="grid">
                <label className="text-lg">Name:</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="p-2 w-72 rounded-md border border-black"
                  value={personalData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="grid ">
                <label className="text-lg">Email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  className="p-2 w-64 rounded-md border border-black"
                  value={personalData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid ">
                <label className="text-lg">Phone number :</label>
                <PhoneInput
                  defaultCountry="IND"
                  name="value"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="bg-zinc-50 border hover:border-black p-10 mx-2 rounded-lg">
            <legend className="text-xl">Address :</legend>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="grid">
                <label className="text-lg">Address-1 :</label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  name="address1"
                  className="p-2 rounded-md border border-black"
                  value={addressData.address1}
                  onChange={handleChange}
                />
              </div>
              <div className="grid ">
                <label className="text-lg">Address-2 :</label>
                <input
                  type="text"
                  name="address2"
                  placeholder="Enter Your Address"
                  className="p-2 rounded-md border border-black"
                  value={addressData.address2}
                  onChange={handleChange}
                />
              </div>
              <div className="grid ">
                <label className="text-lg">City :</label>
                <input
                  type="text"
                  name="city"
                  placeholder="city"
                  className="p-2 rounded-md border border-black"
                  value={addressData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="grid ">
                <label className="text-lg">State :</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="p-2 rounded-md border border-black"
                  value={addressData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="grid ">
                <label className="text-lg">Pin Code :</label>
                <input
                  type="number"
                  name="pincode"
                  placeholder="Mobile number"
                  className="p-2 rounded-md border border-black"
                  value={addressData.pincode}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div>
          <fieldset className="bg-zinc-50 border hover:border-black p-10 mx-2 rounded-lg">
            <legend className="text-xl">File Upload :</legend>
            <div className=" grid md:grid-cols-3 gap-10">
              <div className="grid">
                <label className="text-lg">1. Photo</label>
                <input
                  type="file"
                  name="photo"
                  value={attachmentData.photo}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>
          <div className="my-10 flex justify-center space-x-4">
            <button
              className="bg-blue-800 px-5 py-2 rounded-lg text-white border-2 hover:border-black"
              onClick={handleSubmite}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
