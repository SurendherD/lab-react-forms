import React from 'react';
import {useFormik} from 'formik'

function App() {

  const formik=useFormik({
    initialValues: {
      firstname: '',
      lastname:'',
      mail:'',
      contact:''
    },

    handleSubmit:(values)=>{
        console.log(values);
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>First Name : </label>
        <input type="text" name='firstname' id='firstname' value={formik.values.firstname} onChange={formik.handleChange}/> <br />
        {formik.errors.firstname?<div className="errors">{formik.errors.firstname}</div>:null}

        <label>Last Name : </label>
        <input type="text" name='lastname' id='lastname' value={formik.values.lastname} onChange={formik.handleChange}/> <br />
        {formik.errors.lastname?<div className="errors">{formik.errors.lastname}</div>:null}

        <label>E-mail : </label>
        <input type="email" name='mail' id='mail' value={formik.values.mail} onChange={formik.handleChange}/> <br />
        {formik.errors.mail?<div className="errors">{formik.errors.mail}</div>:null}

        <label>Contact : </label>
        <input type='tel' name='contact' id='contact' value={formik.values.contact} onChange={formik.handleChange}/> <br />
        {formik.errors.contact?<div className="errors">{formik.errors.contact}</div>:null}

        <button type='submit' >Register</button>
      </form>
    </div>
  )
}

export default App
