import React, { useState } from 'react'

const SimpleForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: ""
  });

  const changeHandler = (e) => {
    const {name, value} = e.target
    setForm(prev => (
      {
        ...prev,
        [name]: value
      }
    ))
  }
  const submit = (e) => {
    e.preventDefault()
    console.log("submit")
  }
  console.log(form)
  return (
    <div>
      <h1>Simple Form</h1>    
      <form onSubmit={submit}>
        First Name: 
        <input name="firstName" onChange={changeHandler} value={form.firstName} placeholder="First Name" /><br />
        Last Name: 
        <input name="lastName" onChange={changeHandler} value={form.lastName} placeholder="Last Name" /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SimpleForm
