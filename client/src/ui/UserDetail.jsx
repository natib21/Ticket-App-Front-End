import React, { useState, useEffect } from "react";

const UserDetail = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user"); 
      const data = await response.json();
      setUsers(data.data); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left">User Name</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">Role</th>
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
        
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.userName}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline">Edit</button>
                  <button className="ml-2 text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 text-center">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
