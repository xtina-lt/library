import React,{useState, useEffect} from "react";
import axios from "axios";
import AdminDash from "../users/AdminDash";
import UserDash from "../users/UserDash";
import { useNavigate } from "react-router-dom";

const Dashboard = ({setHeader}) => {
    const [logged, setLogged] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/user-current', { withCredentials: true })
            .then(res => setLogged(res.data) )
            .catch(res => console.log(res.data.errors))
    }, [logged]);

    if (logged) setHeader(logged.first)
    return(
        <>
        {(logged && logged._id === '632b17fd59cb80d1d403cf6d') 
            ? 
            <AdminDash/>
            : 
            (logged)
            ?
            <UserDash id={logged._id}/>
            :
            navigate('/login')
        }
        </>
    )
}

export default Dashboard