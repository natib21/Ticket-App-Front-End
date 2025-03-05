import { useState, useEffect } from "react";
import TicketDetail from "../ui/TicketDetail";
import { getAllTickets } from "../services/ApiTicket";

const Ticket = () => {
  const [tickets, setTickets] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("AUTH_KEY_USER_DATA"))

        useEffect(() => {
        async function fetchTickets() {
          const tickets = await getAllTickets();
          setTickets(tickets)
        }
        fetchTickets();
      }, []);
 
      const handleClick = ()=>{
        console.log("What is your Name ?")
      }

  return (

    <div>
      <div className="flex justify-between items-center ">
     
       <h2 className="text-2xl font-bold p-5"><span className="text-pink-700">{`${user.userName}`}</span>'s Tickets </h2>  
      </div>
      <ul className="p-5 border border-gray-200 h-[65vh] overflow-auto custom-scrollbar">
        {tickets.length > 0 ? (
          <TicketDetail  />
        ) : (
          <p className="text-gray-500 p-5">No tickets available</p>
        )}
      </ul>
    </div>
  

  );
};

export default Ticket;
