import React, { useState } from 'react'

const Register = () => {
    const[login,setLogin]=useState('')
    const[password,setPassword]=useState('')
     const[text,setText]=useState(' ')
     const[color,setcolor]=useState('')
     const[age,setAge]=useState()
   
    
    function handleLogin(event){

    setLogin(event.target.value)
    }
    function handleAge(event){  
        setAge(event.target.value)
    }
    function handlePassword(event){
    setPassword(event.target.value)
    }
    function check(event){
        event.preventDefault()
if(login=="admin" && password=="7777" && age>=18){
    setText("Welcome")
    setcolor("lime")
}
else{
    setText("Wrong login or password")
    setcolor("red")
}
    }
    
  return (
    <div className='container'>
      <form>
        <input  onChange={handleLogin} placeholder='Enter Login' type="text" />
         <input onChange={handlePassword} placeholder='Enter Password' type="text" />
         <input  onChange={handleAge} placeholder='Enter Age' type="number" />
         <p style={{color:color}}>{text}</p>
<button onClick={check}>Log in</button>
      </form>
    </div>
  )
}

export default Register
