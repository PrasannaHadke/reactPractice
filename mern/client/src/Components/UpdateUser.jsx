import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  // default values (so inputs are always controlled)
  const defaults = {
    username: "",
    email: "",
    password: "",
    address: "",
  };

  const [user, setUser] = useState(defaults);

  // input change handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // fetch user by id
  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/user/${id}`)
      .then((response) => {
        // merge defaults with response to avoid undefined values
        setUser({ ...defaults, ...response.data.user });
        console.log(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:7000/api/updateuser/${id}`,
        user
      );
      setUser(defaults); // reset
      toast.success(response.data.message, { position: "bottom-center" });
      navigate("/");
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Home Link */}
      <div className="mb-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium ${
              isActive
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`
          }
        >
          Home
        </NavLink>
      </div>

      {/* Card Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Update User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              placeholder="Enter Your Name"
              value={user.username || ""}
              onChange={inputHandler}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Your Email"
              value={user.email || ""}
              onChange={inputHandler}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="off"
              placeholder="Enter Your Address"
              value={user.address || ""}
              onChange={inputHandler}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter Your Password"
              value={user.password || ""}
              onChange={inputHandler}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
