import React, {useState} from 'react';
const VehiclePage = () => {
    const [vehicles, setvehicles] = useState([]);
    const [newVehicle, setNewVehicle] = useState('');

    const addNewVehicle = (e) => {
     if (newVehicle.trim() === '') return;
     let newVehicleList = [...vehicles,newVehicle];
     console.log("adding list", newVehicleList)
     setvehicles(newVehicleList);
     setNewVehicle('');
    };

    const removeVehicle =(index)=> {
        let updatedVehicleList = vehicles.filter((vehicle, i) => i !== index);
        console.log("updatedlist", updatedVehicleList)
        setvehicles(updatedVehicleList);
    }

    return(
    <>
    <h2>Vehicle Management</h2>
    <input 
    placeholder='Enter you vehicle'
    value={newVehicle}
    onChange={(e) => setNewVehicle(e.target.value)}
    />
    <button onClick={addNewVehicle}>Add Button</button>
    <h4>VehicleList</h4>
    <ul>
        {vehicles.map((vehicle, index) => (
            <li key={index}>
               {vehicle}
               <button onClick={() => removeVehicle(index)}>Remove</button>
            </li>
        ))}
    </ul>
    </>
    );
};
export default VehiclePage;