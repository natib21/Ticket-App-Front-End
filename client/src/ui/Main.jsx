const Menu = () => {

    const ticket = [ 
    {
        title: "JavaScript Issue",
        description: "JavaScript is not working",
        status: "open",
        assignedTo: "assignedTo1",
    },
   {
        title: "My Pc is not working",
        description: " My Pc is not working properly",
        status: "in progress",
        assignedTo: "assignedTo2",
   },
   {
        title: "Payment Issue",
        description: " Payment is not working",
        status: "closed",
        assignedTo: "assignedTo3",
   }
]
    return (
        <div className=" flex">
            <div className="flex-2">
                <div>
                    <h2 className="text-2xl font-bold p-5">Tickets Issued by Customers</h2>
                    <ul className="p-5 overflow-y-auto" style={{height: "calc(100vh - 100px)"}}>
                        {ticket.map((ticket, index) => (
                            <li key={index} className="border-b border-gray-200 p-4">
                                <h3 className="font-bold capitalize">{ticket.title}</h3>
                                <p>{ticket.description}</p> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className=" flex-1 bg-gray-100"></div>
        </div>
    );
}

export default Menu;