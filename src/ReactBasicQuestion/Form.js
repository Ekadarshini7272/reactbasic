import React, {useState} from 'react';
const Form =()=>{
    const [formData, setFormdata] = useState({name: "", email: "", message: ""});
    const [submitted, setSubmitted] = useState(null);
    const handleChange=(e)=> {
        setFormdata({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault(); 
      setSubmitted(formData) 
    }
    return(
        <>
        <h2>Submit</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter your name' name="name" value={formData.name} onChange={handleChange}/>
            <input type='email' placeholder='Enter your email' name="email" value={formData.email} onChange={handleChange}/>
            <input type='textarea' placeholder='Enter your message' name='message' value={formData.message} onChange={handleChange}/>
            <button type='submit'>submit</button>
        </form>
        {submitted && 
        <>
        <p>{formData.name}</p>
        <p>{formData.email}</p>
        <p>{formData.message}</p>
        </>
}
        </>
    );
};
export default Form;