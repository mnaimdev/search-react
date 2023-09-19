import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        profession: '',
    });


    const [isChecked, setIsChecked] = useState(false);

    const hanldeSubmit = (e) => {
        e.preventDefault();
       
    //     fetch("https://jsonplaceholder.typicode.com/posts", {
     
    //     // Adding method type
    //     method: "POST",
         
    //     // Adding body or contents to send
    //     body: JSON.stringify({
    //         title: form.name,
    //         body: form.email,
    //         userId: form.profession
    //     }),
         
    //     // Adding headers to the request
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
     
    // // Converting to JSON
    // .then(response => response.json())
     
    // // Displaying results to console
    // .then(json => console.log(json));
    // }


    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.name,
        body: form.email,
        userId: form.profession
    })
    .then((res) => console.log(res.data))
    .then((err) => console.log(err));

}

    const handleChecked = (e) => {
        setIsChecked(e.target.checked);
    }

    const handleChange = (e) => {
        setForm((prevForm) => ({...prevForm, [e.target.name]: e.target.value}));
    }


  return (
    <>
        <form onSubmit={hanldeSubmit}>
            <div>
                <input type="text" name='name' className="form-control" placeholder='Name' value={form.name} onChange={handleChange} />
            </div>
            <br />
            
           <div>
                <input type="email" name='email' className="form-control" placeholder='Email' value={form.email} onChange={handleChange}/>
           </div>
           <br />
           
            <div>
                <input type="password" name='password' className="form-control" placeholder='Password'  value={form.password} onChange={handleChange}/>
            </div>
            <br />
           
            <div>
                <select name="profession" onChange={handleChange} value={form.profession}>
                    <option >Select Profession</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Problem Solver">Problem Solver</option>
                </select>
            </div>
            <br />

                <div>
                    <input type="checkbox" value={isChecked} onChange={handleChecked} /> Terms and Conditions
                </div>


                {isChecked && (
                    <div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                )}
            
            
        </form>
    </>
  )
}


export default Form;