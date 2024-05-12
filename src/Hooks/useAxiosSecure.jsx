import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, err => {
            if(err.response.status === 401 || err.response.status === 403){
                logout()
                .then(() => {
                    navigate('/login')
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
        })
    },[logout,navigate])
   return axiosSecure
};

export default useAxiosSecure;