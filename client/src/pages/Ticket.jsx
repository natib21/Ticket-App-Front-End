const Ticket = () => {
     const ticket = [ 
        {
            id:"001",
            title: "JavaScript Issue",
            description: "JavaScript is not working",
            status: "open",
            assignedTo: "assignedTo1",
        },
       {
        id:"002",
            title: "My Pc is not working",
            description: " My Pc is not working properly",
            status: "in progress",
            assignedTo: "assignedTo2",
       },
       {
        id:"003",
            title: "Payment Issue",
            description: " Payment is not working",
            status: "closed",
            assignedTo: "assignedTo3",
       }
    ]
    return (
        <div>
        <h2 className="text-2xl font-bold p-5">Tickets Issued by Customers</h2>
        <ul className="p-5 " >
            {ticket.map((ticket, index) => (
                <li key={ticket.id} className="border-b border-gray-200 p-4">
                    <h3 className="font-bold capitalize hover:underline cursor-pointer">{ticket.title}</h3>
                    <p className="text-gray-400">{ticket.description}</p> 
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Ticket;