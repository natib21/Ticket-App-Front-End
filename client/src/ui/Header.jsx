import { IoIosLogOut } from "react-icons/io";
const Header = () => {
    return (
        <header className= "relative bg-gray-800 p-6  shadow-lg">
            <div className="container mx-auto text-white">
                <h1 className="text-3xl font-bold text-center mb-4">Ticket System</h1>
                <p className="text-center mb-6">This system is built using the MERN stack by Nathnael Zelalem to fulfill the job requirements.</p>
                <button className="absolute -bottom-6 right-0  bg-black   m-4 py-2 px-4 cursor-pointer hover:-bottom-4 transition-all flex justify-center gap-3">
                    <span className="text-pink-400 capitalize font-thin flex items-center justify-between gap-2">mimo </span>
                    <span className="flex items-center gap-2 text-pink-400">
                        <IoIosLogOut />
                    </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
