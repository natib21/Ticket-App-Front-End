import { getAllTickets, getTicket, updateTicket, deleteTicket } from "../services/ApiTicket";
import { useEffect, useState } from "react";
const TicketDetail = () => {
    const [ticket,setTicket] = useState([])

    useEffect(() => {
        async function fetchTickets() {
          const tickets = await getAllTickets();
          setTicket(tickets)
        }
        fetchTickets();
      }, []);
  
    return (<>
     {ticket.map((el,index)=> (
        <li key={index}className="border border-gray-300 p-4 rounded-lg shadow-md bg-white hover:bg-gray-50 transition cursor-pointer">
        <h3 className="font-bold capitalize text-lg text-gray-800 hover:underline">
          {el.title}
        </h3>
        <p className="text-gray-500 mt-2">{el.description}</p>
        <div className="mt-4 flex gap-3">
          <button
        
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
            Update
          </button>
          <button
           
           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
           >
            Delete
          </button>
        </div>
      </li>
     )) }
     </>
    );
  };
  
  export default TicketDetail;
  