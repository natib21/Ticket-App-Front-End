const Users = () => {
    const user = [
        {
          "userName": "JohnDoe",
          "email": "johndoe@example.com",
          "password": "password123",
          "passwordConfirm": "password123",
          "role": "admin",
          "ticketAssign": [
            "60d5f1f5f1b88d6d537ffb90",  // Example ticket ID, replace with actual Mongo ObjectId
            "60d5f1f5f1b88d6d537ffb91"
          ],
          "createdAt": "2025-03-01T00:00:00.000Z"
        },
        {
          "userName": "JaneSmith",
          "email": "janesmith@example.com",
          "password": "securepass456",
          "passwordConfirm": "securepass456",
          "role": "agent",
          "ticketAssign": [
            "60d5f1f5f1b88d6d537ffb92"
          ],
          "createdAt": "2025-02-28T00:00:00.000Z"
        },
        {
          "userName": "SamuelJackson",
          "email": "samueljackson@example.com",
          "password": "mypassword789",
          "passwordConfirm": "mypassword789",
          "role": "customer",
          "ticketAssign": [],
          "createdAt": "2025-02-27T00:00:00.000Z"
        },
        {
          "userName": "MiaWhite",
          "email": "miawhite@example.com",
          "password": "strongpass987",
          "passwordConfirm": "strongpass987",
          "role": "agent",
          "ticketAssign": [
            "60d5f1f5f1b88d6d537ffb93"
          ],
          "createdAt": "2025-02-25T00:00:00.000Z"
        }
      ]
      
   return (
       <div className="grid grid-rows-[auto_auto_1fr] border h-full">
       <h2 className="text-2xl font-bold p-5">All Users</h2>
       <div className="flex justify-end p-5">
         <input type="text" className="border p-1" placeholder="Search Users" />
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
           Add User
         </button>
       </div>
       
       <div className="flex-col justify-evenly items-center border sm:flex">
    <div className=" sm:p-20 cursor-pointer sm:rounded-4xl  border-amber-950 hover:border-red-500 hover:shadow-2xl shadow">
        <span className="sm:text-2xl ">AGENTS</span>
    </div>
    <div className=" sm:p-20 cursor-pointer sm:rounded-4xl  border-amber-950  hover:border-red-500 hover:shadow-2xl shadow">
        <span className="sm:text-2xl ">Customers</span>
    </div>
</div>

   </div>
   );
}

export default Users;