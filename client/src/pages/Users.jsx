import { getAllUser } from "../services/ApiUser";
import Modal from "../ui/Modal";
import UserDetail from "../ui/UserDetail";
import { useState ,useEffect} from "react";
import UserForm from "../ui/UserForm";
const Users = () => {
     const [user, setUser] = useState([]);
     const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => setIsModalOpen(true);
     const closeModal = () => setIsModalOpen(false);

           useEffect(() => {
           async function fetchTickets() {
             const users = await getAllUser();
             setUser(users)
           }
           fetchTickets();
         }, []);
      
   return (
       <div className="grid grid-rows-[auto_auto_1fr] border h-full">
       <h2 className="text-2xl font-bold p-5">{`${user.length} Users`}</h2>
       <div className="flex justify-end p-5">
         <button onClick={openModal}  className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
           Add User
         </button>
       </div>
       {isModalOpen ? 
       <Modal isOpen={isModalOpen} onClose={closeModal}> 
         <UserForm />
        </Modal>
        :  
        <UserDetail />}
    

   </div>
   );
}

export default Users;