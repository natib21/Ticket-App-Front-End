import { useState, useEffect } from "react";
import TicketDetail from "../ui/TicketDetail";
import { getAllTickets } from "../services/ApiTicket";
const Ticket = () => {
  const [tickets, setTickets] = useState([]);
        useEffect(() => {
        async function fetchTickets() {
          const tickets = await getAllTickets();
          setTickets(tickets)
        }
        fetchTickets();
      }, []);


  return (
    <div>
      <h2 className="text-2xl font-bold p-5">Tickets Issued by Customers</h2>
      <ul className="p-5">
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
