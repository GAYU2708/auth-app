import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({setDetails}) {
    const [data,setData]= useState({
        name:"",
        pwd:"",
    });
    const navi = useNavigate();
 const handleSubmit =(e)=>{
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem('users'));

    if(storedData.name === data.name && storedData.pwd === data.pwd){
        console.log("Login Successfully");
        setDetails(data);
        navi('/home');
    }else{
        console.log("Login unsuccessfull Kindly register");
        window.alert("your are not registered ");
        navi('/');
    }
 }
    

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100'>
        <div className='w-50 p-2'>
            <form className='border p-5 rounded' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <lable className="form-label" htmlFor="name"> UserName: </lable>
                    <input type='text' className='form-control' name='name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder='Enter your Name' />
                </div>
                <div className='mb-3'>
                    <lable className="form-label" htmlFor="pwd"> Password: </lable>
                    <input type='password' className='form-control' name='pwd'value={data.pwd} onChange={(e)=>setData({...data,pwd:e.target.value})} placeholder='Enter your Password' />
                </div>
              
                <button type='submit' className='btn btn-primary'>Login</button>

            </form>

        </div>

    </div>
  )
}
