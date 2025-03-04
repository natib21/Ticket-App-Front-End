import { getAllTickets, getTicket, updateTicket, deleteTicket } from "../services/ApiTicket";
import { useEffect, useState } from "react";
const TicketDetail = () => {
    const [ticket,setTicket] = useState([])
    const [selectedTicket, setSelectedTicket] = useState(""); 
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [newStatus, setNewStatus] = useState('');
    const user = JSON.parse(sessionStorage.getItem("AUTH_KEY_USER_DATA"))
    const token = sessionStorage.getItem("AUTH_KEY_TOKEN")
    useEffect(() => {
        async function fetchTickets() {
          const tickets = await getAllTickets();
          setTicket(tickets)
        }
        fetchTickets();
      }, []);
  

      const handleUpdateClick = (ticket) => {
       console.log(ticket)
        setSelectedTicket(ticket);  
        setNewStatus(ticket.status);  
        setIsModalOpen(true);  
      };
      const handleStatusChange = async () => {
        try {
         const result = await updateTicket(selectedTicket._id, { status: newStatus },token); 
          setTicket((prevTickets) =>
            prevTickets.map((ticket) =>
              ticket.id === selectedTicket._id
                ? { ...ticket, status: newStatus } 
                : ticket
            )
          );
          setIsModalOpen(false); 
          console.log("updating ticket status correctly:", result);
        }catch(err){
          console.error("Error Appeaar",err)
        }
      };
    return (<>
     {ticket.map((el,index)=> (
        <li key={index}className="border border-gray-300 p-4 rounded-lg shadow-md bg-white hover:bg-gray-50 transition cursor-pointer m-5">
        <h3 className="font-bold capitalize text-lg text-gray-800 hover:underline">
          {el.title}
        </h3>
        <p className="text-gray-500 mt-2">{el.description}</p>
       {user.role === "admin" ? ( <div className="mt-4 flex gap-3">
          <button
         onClick={(e) => handleUpdateClick(el)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
            Update
          </button>
          <button
           
           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
           >
            Delete
          </button>
        </div>) : ""}
        <div>
  <p
    className={`
      ${
        el.status === 'open'
          ? 'text-green-500 font-bold'
          : el.status === 'in progress'
          ? 'text-yellow-500 font-semibold'
          : 'text-red-500 font-bold'
      }
    `}
  >
    Status: {el.status}
  </p>
</div>

      </li>
     )) }
        {isModalOpen && selectedTicket && (
        <div className="fixed inset-0 bg-gray-600/5 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Ticket Status</h2>
            <p className="text-sm text-gray-500 mb-4">
              You are updating the status for ticket: <strong>{selectedTicket.title}</strong>
            </p>

            <div className="mb-4">
              <label htmlFor="status" className="block text-sm font-medium text-gray-600">
                New Status
              </label>
              <select
                id="status"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="">Select a new status</option>
                <option value="open">Open</option>
                <option value="in progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div className="flex justify-between gap-4">
              <button
                onClick={() => setIsModalOpen(false)}  
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleStatusChange}  
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      )}
     </>
    );
  };
  
  export default TicketDetail;
  