import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Loader from "../Utilities/Loader";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loader/>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;