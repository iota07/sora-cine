import { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import AuthContext from "../API/AuthContext";

function LoginComponent() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const navigateToHomepage = () => navigate("/profile");

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const regexPatterns = {
    // regex patterns for validation
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, // Requires at least 8 characters with at least one letter and one number
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
        return "Password format is incorrect.";
      // Add more cases for other fields if needed
      default:
        return `Invalid ${fieldName} format`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3200/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Error submitting form:", errorMessage);
        throw new Error("Failed to submit form");
      }

      // Handle success (e.g., show a success message)
      const responseData = await response.json();
      login();
      navigateToHomepage();
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting form:", error.message);

      // Assuming there's a state to store the error message
      // Update the state to display the error message in the UI
      setValidationErrors({
        ...validationErrors,
        submitError: "An error occurred while submitting the form.",
      });
    }
  };

  return (
    <>
      <section className="min-w-fit max-w-sm flex-col border bg-slate-200 px-6 py-14 shadow-md rounded-2xl lg:w-96 w-80 px-4">
        <h2 className="text-2xl mb-8 text-center">Log in</h2>
        <form
          className="grid gap-6 sm:grid-cols-2 pb-4 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="relative z-0 col-span-2">
            <input
              type="text"
              name="email"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
              placeholder=" "
              value={formData.email}
              onChange={handleInputChange}
              readOnly={false}
            />
            <label
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-text-400"
              htmlFor="email"
            >
              Your email
            </label>
            {/* Display validation error for email */}
            {validationErrors.email && (
              <p className="text-red-500">{validationErrors.email}</p>
            )}
          </div>
          {/* Password Input */}
          <fieldset className="relative z-0 mb-5 col-span-2">
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-teal-400 focus:outline-none focus:ring-0"
              type={showPassword ? "text" : "password"}
              placeholder=""
              value={formData.password}
              onChange={handleInputChange}
              readOnly={false}
            />
            <button
              type="button"
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                /* SVG for hide password */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                /* SVG for show password */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
            <label
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-teal-400 peer-focus:dark:text-teal-400"
              htmlFor="password"
            >
              Your password
            </label>
            {/* Display validation error for password */}
            {validationErrors.password && (
              <p className="max-w-sm text-red-500">
                {validationErrors.password}
              </p>
            )}
          </fieldset>
          {/* Sign up Button */}
          <button
            className="rounded-lg border p-3 bg-gradient-to-r from-gray-800 bg-indigo-950 text-white hover:bg-slate-400 duration-300 row-start-5 col-span-2"
            type="submit"
          >
            Sign in
          </button>
        </form>
        {validationErrors.submitError && (
          <p className="text-red-500 max-w-{12rem} text-center text-xs">
            {validationErrors.submitError}
          </p>
        )}
        <NavLink className="flex justify-center text-sm text-teal-400">
          Forget password?
        </NavLink>
      </section>
    </>
  );
}

export default LoginComponent;
