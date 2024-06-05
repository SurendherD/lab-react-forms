import React, { useState } from 'react';
import {useFormik,Form} from 'formik';
import './App.css'

function App() {
  
  const [submitted, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);

  const formik=useFormik({
    initialValues: {
      firstname: '',
      lastname:'',
      mail:'',
      contact:''
    },

    validateOnChange:false,

    onSubmit:(values)=>{
        if(values.firstname && values.lastname && values.mail && values.contact){
          setValidate(true);
          setSubmit(true)
        }

    },

    validate:(values) =>{
      let errors = {};
      if(!values.firstname){
        errors.firstname = "First Name Rquired"
      }
      if(!values.lastname){
        errors.lastname = "Last Name Rquired"
      }
      if(!values.mail){
        errors.mail = "Email Rquired"
      }
      if(!values.contact){
        errors.contact = "Phone number Rquired"
      }
      
    return errors;
  }

  })


  return (
    <div  className='container'>
      <div className='innerContainer'>
        <form onSubmit={formik.handleSubmit} autoComplete='off'>
        {submitted && validate?<div className="success">Registration succesfull</div>:<div className="success">Registration Form</div>}
          <input type="text" name='firstname' id='firstname' placeholder='firstname' value={formik.values.firstname} onChange={formik.handleChange}/> <br />
          {formik.errors.firstname?<div className="errors">{formik.errors.firstname}</div>:null}

          <input type="text" name='lastname' id='lastname' placeholder='lastname' value={formik.values.lastname} onChange={formik.handleChange}/> <br />
          {formik.errors.lastname?<div className="errors">{formik.errors.lastname}</div>:null}

        
          <input type="email" name='mail' id='mail' placeholder='E-mail' value={formik.values.mail} onChange={formik.handleChange}/> <br />
          {formik.errors.mail?<div className="errors">{formik.errors.mail}</div>:null}

        
          <input type='tel' name='contact' id='contact' placeholder='Mobile Number' value={formik.values.contact} onChange={formik.handleChange}/> <br />
          {formik.errors.contact?<div className="errors">{formik.errors.contact}</div>:null}

          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default App
