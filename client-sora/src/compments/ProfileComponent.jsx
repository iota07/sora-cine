import React, { useState, useEffect } from "react";
import profile_icon from "../assets/images/Naruto-PNG-Clipart.png";
import { ButtonSubscribe } from "./Buttons";
import { NavLink } from "react-router-dom";
function ProfileComponent() {
  const [user, setUser] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    password: "",
  });

  const [editModes, setEditModes] = useState({
    firstname: false,
    lastname: false,
    birthday: false,
    email: false,
    password: false,
  });

  const regexPatterns = {
    firstname: /^[a-zA-Z0-9_-]+$/,
    lastname: /^[a-zA-Z0-9_-]+$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
  };

  const [validationErrors, setValidationErrors] = useState({});

  // Separate state for password input
  const [passwordInput, setPasswordInput] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Special handling for password validation
    let isValid = true;
    let errorMessage = "";

    if (name === "password") {
      isValid = regexPatterns.password.test(value);
      errorMessage = isValid ? "" : getErrorMessage(name);

      // Update the validation status for password
      setValidationErrors({
        ...validationErrors,
        [name]: errorMessage,
      });

      // Update the passwordInput state
      setPasswordInput(value);
    } else {
      // Handling for other fields
      isValid = !regexPatterns[name] || regexPatterns[name].test(value);
      errorMessage = isValid ? "" : getErrorMessage(name);

      // Update the validation status for other fields in the state
      setValidationErrors({
        ...validationErrors,
        [name]: errorMessage,
      });

      // Update the state for other fields
      setUser({ ...user, [name]: value });
    }
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3200/user/65786d43bc878cd0d66e1dae"
        );
        const userData = await response.json();
        setUser(userData.message);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const formattedBirthday = user.birthday
    ? new Date(user.birthday).toISOString().split("T")[0]
    : "Loading...";

  const handleEditClick = (fieldName) => {
    setEditModes((prevEditModes) => ({
      ...prevEditModes,
      [fieldName]: !prevEditModes[fieldName],
    }));
  };

  const handleSaveClick = async (fieldName, e) => {
    e.preventDefault();

    try {
      // Validation check before saving
      if (validationErrors[fieldName]) {
        console.error(
          `Validation error for ${fieldName}: ${validationErrors[fieldName]}`
        );
        return;
      }

      const updatedUser = { ...user, [fieldName]: user[fieldName] };

      if (fieldName === "password") {
        updatedUser[fieldName] = passwordInput;

        // Clear passwordInput after a brief delay
        setTimeout(() => {
          setPasswordInput("");
        }, 500);
      }

      const response = await fetch(`http://localhost:3200/user/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        console.log(`Successfully updated ${fieldName}`);
      } else {
        console.error(`Failed to update ${fieldName}`);
      }

      setValidationErrors({});

      setEditModes((prevEditModes) => ({
        ...prevEditModes,
        [fieldName]: false,
      }));
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleEditButton = (e, fieldName) => {
    e.preventDefault();
    handleEditClick(fieldName);
  };

  return (
    <>
      <section className="grid md:grid-cols-3 border bg-slate-200 px-6 py-14 shadow-md rounded-2xl sm:max-w-lg md:max-w-6xl">
        <section className="grid grid-cols-6 md:col-start-2 min-w-fit max-w-md sm:max-w-md items-center justify-between select-none">
          <NavLink to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 justify-start col-start-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </NavLink>
          <h2 className="text-3xl font-bold col-start-2 col-span-5">
            Account Settings
          </h2>
          <figure className="relative w-32 col-start-1 col-span-2 mt-10">
            <img
              src={profile_icon}
              alt="profile icon"
              className="rounded-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute bottom-1 right-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </figure>
          <div className="text-2xl col-span-4 pt-16 pl-4 font-bold">
            {user.lastname} {user.firstname}
          </div>
          <form className="col-span-6 col-start-1 grid grid-cols-4 justify-between select-none">
            <p className="pt-6 col-span-2">Name</p>
            <input
              id="firstname"
              type="text"
              name="firstname"
              className={`w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold ${
                editModes.firstname ? "bg-slate-100" : ""
              } ${
                !editModes.firstname ? "border-none" : ""
              } focus:border-none focus:outline-none ${
                validationErrors.firstname ? "border-red-500" : ""
              }`}
              placeholder={user.firstname}
              value={user.firstname}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSaveClick("firstname", e);
                }
              }}
              readOnly={!editModes.firstname}
            />
            {/* Display validation error for firstname */}
            {validationErrors.firstname && (
              <p className="text-red-500 text-sm col-span-3 col-start-1">
                {validationErrors.firstname}
              </p>
            )}
            {editModes.firstname ? (
              <button
                className="border-2 rounded-lg bg-blue-400 text-white px-2 py-1 col-start-6"
                onClick={(e) => handleSaveClick("firstname", e)}
              >
                Save
              </button>
            ) : (
              <button
                className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 ml-4 col-start-6"
                onClick={(e) => handleEditButton(e, "firstname")}
              >
                Edit
              </button>
            )}
            <p className="pt-6 col-span-2">Surname</p>
            <input
              id="lastname"
              type="text"
              name="lastname"
              className={`w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold ${
                editModes.lastname ? "bg-slate-100" : ""
              } ${
                !editModes.lastname ? "border-none" : ""
              } focus:border-none focus:outline-none ${
                validationErrors.lastname ? "border-red-500" : ""
              }`}
              placeholder={user.lastname}
              value={user.lastname}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSaveClick("lastname", e);
                }
              }}
              readOnly={!editModes.lastname}
            />
            {/* Display validation error for lastname */}
            {validationErrors.lastname && (
              <p className="text-red-500 text-sm col-span-3 col-start-1">
                {validationErrors.lastname}
              </p>
            )}
            {editModes.lastname ? (
              <button
                className="border-2 rounded-lg bg-blue-400 text-white px-2 py-1 col-start-6"
                onClick={(e) => handleSaveClick("lastname", e)}
              >
                Save
              </button>
            ) : (
              <button
                className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 ml-4 col-start-6"
                onClick={(e) => handleEditButton(e, "lastname")}
              >
                Edit
              </button>
            )}
            <p className="pt-6 col-span-2">Date of birth</p>

            {editModes.birthday ? (
              <input
                name="birthday"
                className={`w-full text-md font-bold col-start-1 col-span-3 appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 ${
                  editModes.birthday ? "bg-slate-100" : ""
                } ${
                  !editModes.birthday ? "border-none" : ""
                } focus:border-none focus:outline-none`}
                type="date"
                value={user.birthday}
                onChange={(e) => setUser({ ...user, birthday: e.target.value })}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSaveClick("birthday", e);
                  }
                }}
                readOnly={!editModes.birthday}
              />
            ) : (
              <span className="text-md font-bold col-start-1 col-span-3 text-gray-900 mr-2">
                {formattedBirthday}
              </span>
            )}
            <button
              className={`border-2 rounded-lg bg-gray-400 text-white col-start-6 ml-4 px-2 py-1 ${
                !editModes.birthday ? "" : "hidden"
              }`}
              onClick={(e) => handleEditButton(e, "birthday")}
            >
              Edit
            </button>

            <button
              className={`border-2 rounded-lg bg-blue-400 text-white px-2 py-1 col-start-6 ${
                !editModes.birthday ? "hidden" : ""
              }`}
              onClick={(e) => handleSaveClick("birthday", e)}
            >
              Save
            </button>

            <p className="pt-6 col-span-2">Email</p>
            <input
              id="email"
              type="text"
              name="email"
              className={`w-full text-md font-bold col-start-1 col-span-3 placeholder:text-black placeholder:font-bold ${
                editModes.email ? "bg-slate-100" : ""
              } ${
                !editModes.email ? "border-none" : ""
              } focus:border-none focus:outline-none ${
                validationErrors.email ? "border-red-500" : ""
              }`}
              placeholder={user.email}
              value={user.email}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSaveClick("email", e);
                }
              }}
              readOnly={!editModes.email}
            />
            {/* Display validation error for email */}
            {validationErrors.email && (
              <p className="text-red-500 text-sm col-span-3 col-start-1">
                {validationErrors.email}
              </p>
            )}
            {editModes.email ? (
              <button
                className="border-2 rounded-lg bg-blue-400 text-white px-2 py-1 col-start-6"
                onClick={(e) => handleSaveClick("email", e)}
              >
                Save
              </button>
            ) : (
              <button
                className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 ml-4 col-start-6"
                onClick={(e) => handleEditButton(e, "email")}
              >
                Edit
              </button>
            )}
            <p className="pt-6 col-span-2">Password</p>
            <input
              id="password"
              type="password"
              name="password"
              className={`w-full text-md font-bold col-span-3 col-start-1 placeholder:text-black placeholder:font-bold ${
                editModes.password ? "bg-slate-100" : ""
              } ${
                !editModes.password ? "border-none" : ""
              } focus:border-none focus:outline-none ${
                validationErrors.password ? "border-red-500" : ""
              }`}
              placeholder="********"
              value={passwordInput}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSaveClick("password", e);
                }
              }}
              readOnly={!editModes.password}
            />

            {validationErrors.password && (
              <p className="text-red-500 text-sm col-span-3 col-start-1">
                {validationErrors.password}
              </p>
            )}

            {editModes.password ? (
              <button
                className="border-2 rounded-lg bg-blue-400 text-white px-2 py-1 col-start-6"
                onClick={(e) => handleSaveClick("password", e)}
              >
                Save
              </button>
            ) : (
              <button
                className="border-2 rounded-lg bg-gray-400 text-white px-2 py-1 ml-4 col-start-6"
                onClick={(e) => handleEditButton(e, "password")}
              >
                Edit
              </button>
            )}
          </form>

          <button className="border-2 border-red-500 rounded-lg col-span-6 p-5 mt-8 text-red-500 font-bold">
            Delete Account
          </button>
          <button className="border-2 border-gray-600 rounded-lg bg-gray-600 text-white col-span-6 p-5 mt-4 font-bold">
            Sign out
          </button>
        </section>
      </section>
    </>
  );
}

export default ProfileComponent;
