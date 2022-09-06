import React from 'react'
import { useState } from 'react';
import AuthService from '../services/auth.service'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Message from "./Message";

const FormLogin = () => {
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function submitHandler(event) {
    event.preventDefault();
    AuthService.login(username, password)
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        setShowError(true);
        console.log(error);
      })

  }



  return (
    <>


      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Trade Depot Tracking Portal</h1>



          <form onSubmit={submitHandler} class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p class="text-lg font-medium">Sign in to your account</p>

            <div>
              <label for="email" class="text-sm font-medium">Username</label>

              <div class="relative mt-1">
                <input
                  type="username"
                  id="username"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter username"
                  value={username} onChange={(e) => setUsername(e.target.value)}
                />


              </div>
            </div>

            <div>
              <label for="password" class="text-sm font-medium">Password</label>

              <div class="relative mt-1">
                <input
                  type="password"
                  id="password"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />

              </div>
            </div>

            <button type="submit" class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg" >
              Login
            </button>


            {showError && (<Message color="red" />)}
          </form>
        </div>
      </div>

    </>
  )
}

export default FormLogin