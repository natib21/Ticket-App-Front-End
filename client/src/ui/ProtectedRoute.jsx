import useAuth from "../hook/useAuth"
import { Navigate,Outlet } from "react-router"
const ProtectedRoute = ()=>{
    const {isLoggedIn} = useAuth()
    const token = isLoggedIn()
    return token ? <Outlet /> : <Navigate to={"/login"} replace={true} />
}

export default ProtectedRoute