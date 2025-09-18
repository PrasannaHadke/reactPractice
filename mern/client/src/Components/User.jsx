import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

function User() {
  const [userData, setUserData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/api/allUsers')
      const result = response.data
      setUserData(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`http://localhost:7000/api/deleteuser/${userId}`);

    // update state (remove deleted user from list)
    setUserData((prevUser) => prevUser.filter((user) => user._id !== userId));

    toast.success(response.data.message, { position: "top-center" });
  } catch (error) {
    console.error("Error deleting user:", error.response?.data || error.message);
    toast.error("Failed to delete user", { position: "top-center" });
  }
};

  return (
    <div className="p-6">
      {/* Add User Button */}
      <div className="mb-4">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `px-4 py-2 rounded-md font-medium transition ${
              isActive ? "bg-red-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
            }`
          }
        >
          Add User
        </NavLink>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200 text-left text-sm">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-2 border">No.</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Address</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((user, i) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2 border">{i + 1}</td>
                  <td className="px-4 py-2 border">{user.username}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">{user.address}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <NavLink className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    to={`/update/`+user._id}>
                      Update
                    </NavLink>
                    <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={()=> deleteUser(user._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center px-4 py-4 text-gray-500"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default User
