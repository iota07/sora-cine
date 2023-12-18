import React from "react";
import { useState } from "react";

function ContactComponent() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    subject: "",
    content: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const regexPatterns = {
    firstname: /^[a-zA-Z0-9_-]+$/,
    lastname: /^[a-zA-Z0-9_-]+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
  };

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Check if there is a regex pattern for validation
    const isValid = !regexPatterns[name] || regexPatterns[name].test(value);

    // Update the validation status in the state
    setValidationErrors({
      ...validationErrors,
      [name]: isValid ? "" : getErrorMessage(name),
    });

    // Update the state regardless of validation status
    setFormData({ ...formData, [name]: value });
  };

  const getErrorMessage = (fieldName) => {
    switch (fieldName) {
      case "password":
        return "Must be at least 8 characters long and contain at least one letter and one number.";
      // Add more cases for other fields if needed
      default:
        return `Invalid ${fieldName} format`;
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3200/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, subject: selectedCategory }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error submitting form");
        throw new Error("Failed to submit form");
      }
      // Handle success (e.g., show a success message)
      const responseData = await response.json();
      console.log("Form submitted successfully");
      setFormSubmitted(true);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting form");
    }
  };

  return (
    <>
      {formSubmitted ? (
        <>
          <section className="bg-red-800 min-h-[50vh] rounded-lg min-w-[20rem] text-center grid place-items-center">
            <article className="p-3 text-white max-h-full">
              <h2 className="text-2xl mb-8 text-center">Thank your!</h2>
              <p className="pb-6">Your message will be processed shortly.</p>
            </article>
          </section>
        </>
      ) : (
        <>
          <section className="min-w-fit max-w-md sm:max-w-lg flex-col border bg-slate-200 px-6 py-14 shadow-md rounded-2xl">
            <form className="mt-10" onSubmit={handleSubmit}>
              <h2 className="text-2xl mb-8 text-center">Contact us</h2>
              <fieldset className="grid gap-6 sm:grid-cols-2 pb-4">
                <div className="relative z-0">
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.firstname}
                    onChange={handleInputChange}
                  />
                  <label
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  {/* Display validation error for firstname */}
                  {validationErrors.firstname && (
                    <p className="text-red-500">{validationErrors.firstname}</p>
                  )}
                </div>
                <div className="relative z-0">
                  <input
                    id="lastname"
                    type="text"
                    name="lastname"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400"
                    htmlFor="last name"
                  >
                    Last name
                  </label>
                  {/* Display validation error for lastname */}
                  {validationErrors.lastname && (
                    <p className="text-red-500">{validationErrors.lastname}</p>
                  )}
                </div>
                <div className="relative z-0">
                  <input
                    type="text"
                    name="email"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400"
                    htmlFor="email"
                  >
                    Your email
                  </label>
                  {/* Display validation error for email */}
                  {validationErrors.email && (
                    <p className="text-red-500">{validationErrors.email}</p>
                  )}
                </div>
                <div className="relative z-0 col-span-2">
                  <select
                    id="subject"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
                    placeholder=" "
                  >
                    <option value="">Choose a category</option>
                    <option value="01">Issue with authentication</option>
                    <option value="02">Issue with my account</option>
                    <option value="03">Technical problem</option>
                    <option value="04">General questions</option>
                    <option value="05">Feedback and suggestions</option>
                    <option value="06">Report a bug</option>
                    <option value="07">Feature request</option>
                    <option value="08">Other (specify)</option>
                  </select>
                </div>
                <div className="relative z-0 col-span-2">
                  <textarea
                    name="content"
                    rows="5"
                    className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.content}
                    onChange={handleInputChange}
                  ></textarea>
                  <label
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400"
                    htmlFor="textarea"
                  >
                    Your message
                  </label>
                </div>
                <button
                  type="submit"
                  className="col-span-2 rounded-lg border p-3 bg-gradient-to-r from-gray-800 bg-indigo-950 text-white hover:bg-slate-400 duration-300"
                >
                  Send Message
                </button>
              </fieldset>
            </form>
          </section>
        </>
      )}
    </>
  );
}

export default ContactComponent;
