/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import validation from '../validation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [values,setValues]=useState({
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const [errors,setErrors]=useState({

  })
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));
    if(errors.email==="" && errors.password===""){
      axios.post('http://localhost:3000/login',values)
      .then(res=>{
        if(res.data==="success"){
          navigate("/gallery")
        }
        else{
          alert("No record exists");
        }
      })
      .catch(err=>console.log(err));
    }
  }
  return (
    <div class="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
  <div class="relative">
    

    <div class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
      <div class="flex-auto p-6">
        
        <div class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
          <a href="/" class="flex cursor-pointer items-center gap-2 text-[#f0a500] no-underline hover:text-indigo-500">
          <Link to="/" className=" font-bold text-3xl  p-1 cursor-pointer text-[#f0a500]">
            Album<span className="text-[#000] text-3xl" >SHARE</span>
          </Link>
          </a>
        </div>
        <div class=" flex items-center justify-center">
        <h4 class="mb-2 font-medium text-gray-700 xl:text-xl ">Please log in to continue </h4>
        
        </div> 

        <form id="" class="mb-4" action="#" method="POST" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="email" class="mb-2 inline-block text-xs font-medium  text-gray-700">Email Address</label>
            <input type="email" onChange={handleInput} class="block w-full cursor-text appearance-none rounded-sm border
             border-b-gray-400 bg-[#dde1e6] py-2 px-3 text-sm outline-none 
             focus:border-gray-500 focus:bg-white focus:text-gray-600 focus:shadow" 
             id="email" name="email" placeholder="Placeholder" autofocus="" />
             <span>{errors.email &&<span className='text-red-500'>{errors.email} </span>}</span>
          </div>
          <div class="mb-4">
            <div class="flex justify-between">
              <label class="mb-2 inline-block text-xs font-medium  text-gray-700" for="password">Password</label>
              <a href="#" class="cursor-pointer text-gray-500 no-underline hover:text-indigo-500">
                
              </a>
              <span>{errors.password &&<span className='text-red-500'>{errors.password} </span>}</span>
            </div>
            <div class="relative flex w-full flex-wrap items-stretch">
              <input type="password" onChange={handleInput} id="password" class="relative block flex-auto cursor-text 
              appearance-none rounded-sm border border-b-gray-400 bg-[#dde1e6] py-2 px-3 
              text-sm outline-none focus:border-gray-500 focus:bg-gray
               focus:text-gray-600 focus:shadow" name="password" placeholder="Placeholder" />
            </div>
          </div>
          <h6 class="font-Satoshi text-sm">It must be a 
          combination of minimum 8 letters, numbers, and symbols.</h6>
          <div class="mb-4">
            <div class="flex flex-row">
                <div className='basis-2/3'>
              <input class="mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow  focus:shadow" 
              type="checkbox" id="remember-me" le="background-image: url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 10l3 3l6-6'/%3e%3c/svg%3e&quot;)" checked />
              <label class="inline-block" for="remember-me w-64"> Remember Me </label>
              </div>
              <a href="auth-forgot-password-basic.html" class="  cursor-pointer text-[#f0a500] no-underline hover:text-indigo-500 ">
                <small class="">Forgot Password?</small>
              </a>
            </div>
          </div>
          <div class="mb-4">

            <Link to="/gallery">
            <button class="grid py-4 w-full cursor-pointer select-none rounded-md border 
            border-[#f0a500] bg-[#f0a500] px-5 text-center align-middle text-sm
             text-black shadow   hover:text-white   
             focus:text-white focus:shadow-none" type="submit">Log In</button>
             </Link>
          </div>
        </form>

        <p class="mb-4 text-center">
          No account yet?
          <a href="/" className="underline text-[#f0a500]"> Sign UP </a>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default LoginPage