import React from 'react'
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

export default function Register() {
    const [data,setData]= useState({
        name:"",
        pwd:"",
        c_pwd:"",
    });
    const navigate= useNavigate();

const handleSubmit =(e)=>{
 e.preventDefault();
 
 const storedData = JSON.parse(localStorage.getItem('users'));
 if(storedData.name === data.name && storedData.pwd === data.pwd){
    window.alert("Already Register");
    navigate('/login');
 }else{
    
   localStorage.setItem('users',JSON.stringify(data));
   console.log("data", data);
   navigate('/login');

 }

}
    

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'>
        <div className='w-50 p-2 '>
            <form className='border p-5 rounded' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <lable className="form-label" htmlFor="name"> UserName: </lable>
                    <input type='text' className='form-control' name='name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder='Enter your Name' />
                </div>
                <div className='mb-3'>
                    <lable className="form-label" htmlFor="pwd"> Password: </lable>
                    <input type='password' className='form-control' name='pwd'value={data.pwd} onChange={(e)=>setData({...data,pwd:e.target.value})} placeholder='Enter your Password' />
                </div>
                <div className='mb-3'>
                    <lable className="form-label" htmlFor="c_pwd"> Confirm Password: </lable>
                    <input type='password' className='form-control' name='c_pwd'value={data.c_pwd} onChange={(e)=>setData({...data,c_pwd:e.target.value})} placeholder='Re enter Your Password' />
                </div>
                <button type='submit' className='btn btn-primary'>Register</button>
                <p> if Already Registered!!    <Link to='/login' >
                Signin</Link></p>
             

            </form>

        </div>

    </div>
  )
}
