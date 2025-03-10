import React,{useState, useEffect} from "react";
const UserList =()=> {
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FetchData = async() => {
            try{
              const response = await fetch("https://jsonplaceholder.typicode.com/users");
              if(!response.ok) throw new Error("Failed to fetch");
              const data = await response.json();
              setUser(data)
            } catch(err){
               setError(err.message)
            } finally {
              setLoading(false);
            }
        }
        FetchData();
    }, []);
    if(loading) return <p>Loading to fetch data...</p>
    if(error) return <p>{error}</p>
    return(
        <>
        <h1>Users List Data</h1>
        <ul>
            {user.map((users) => (
               <li key={users.id}>{users.name}</li> 
            ))}
        </ul>
        </>
    );
};
export default UserList;