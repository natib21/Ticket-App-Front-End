import { IoIosArrowForward } from "react-icons/io";
import { Link, Outlet } from "react-router";
import { useState } from "react";
import Modal from "./Modal";
import TicketForm from "./TicketForm";
const Menu = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex">
      <div className="flex-1 bg-gray-100 p-5">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="mt-5">
          <ul>
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-2 p-2 hover:underline cursor-pointer"
              >
                <IoIosArrowForward />
                <span>Tickets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="flex items-center gap-2 p-2 hover:underline cursor-pointer"
              >
                <IoIosArrowForward />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-2 p-2 hover:underline cursor-pointer"
              >
                <IoIosArrowForward />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
          <div className="mt-5">
            <button onClick={openModal} className="bg-blue-950 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Add Ticket
            </button>
          </div>
        </div>
      </div>

  
      <div className="flex-2 p-5">

      {isModalOpen ? <Modal isOpen={isModalOpen} onClose={closeModal} > 
          <TicketForm />
        </Modal>
        :  <Outlet />}
      </div>
    </div>
  );
};

export default Menu;
