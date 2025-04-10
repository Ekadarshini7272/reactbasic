import React,{useState, useEffect} from "react";
import axios from 'axios';
const AxiosApi =()=> {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchApi = async() => {
            console.log("fetchning data...")
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            // console.log("success", response.data)
            setUsers(response.data)
        } catch(err) {
            console.log("failure", err)
        //   setError("something went wrong.")
        }finally{
            // console.log("some went wrong")
          setLoading(false)
        }
        }
        fetchApi()   
    }, [])
    if(loading) return <p>loading users</p>
    if(error) return <p>error...</p>
    return (
        <>
        <h2>All the user data</h2>
        {users.map(user => (
            <div key={user.id}>
              <h3>{user.name}</h3> 
              <p>{user.username}</p> 
              <p>{user.email}</p>
            </div>
        ))}
        </>
    );
};
export default AxiosApi;