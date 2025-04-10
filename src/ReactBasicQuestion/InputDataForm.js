import React, {useState} from "react";

const InputDataForm =() =>{
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [submitted, setSubmitted] = useState(null);
   
    const handleChange =(e)=>{
     setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(formData)
    }
    return(
        <>
        <h2>Form input data populate</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" required name="name" value={formData.name} onChange={handleChange}/>
            <input type="email" placeholder="Enter your email" required name="email" value={formData.email} onChange={handleChange}/>
            <input type="message" placeholder="Enter your message" required name="message" value={formData.message} onChange={handleChange}/>
            <button type="submit">Submit to see data</button>
        </form>
        {submitted && (
            <div>
                <h2>{submitted.name}</h2>x``
                <h2>{submitted.email}</h2>
                <h2>{submitted.message}</h2>
            </div>
        )}
        </>
    );
};
export default InputDataForm;