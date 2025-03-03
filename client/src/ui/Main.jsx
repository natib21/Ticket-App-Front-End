import { IoIosArrowForward } from "react-icons/io";
import { Link,Outlet } from "react-router";
const Menu = () => {

   
    return (
        <div className=" flex">
         
            <div className=" flex-1 bg-gray-100">
                <h2 className="text-2xl font-bold p-5">Dashboard</h2>
                <ul className="p-5">
                    <Link to="/tickets" className="p-2 hover:underline cursor-pointer flex items-center gap-2">
                        <span><IoIosArrowForward /> </span>
                        <span>Tickets</span>
                        </Link>
                    <Link to="/users" className="p-2 hover:underline cursor-pointer flex items-center gap-2"> 
                    <span><IoIosArrowForward /> </span>
                    <span>Users</span>
                    </Link>
                    <Link to="/settings" className="p-2 hover:underline cursor-pointer flex items-center gap-2">
                    <span><IoIosArrowForward /> </span>
                    <span>Settings</span>
                    </Link>
                </ul>
            </div>
            <div className="flex-2">
            <Outlet />
            </div>
        </div>
    );
}

export default Menu;