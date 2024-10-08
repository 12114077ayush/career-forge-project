/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from '../utils';
const Signup = () => {
    const navigate = useNavigate()
    const { registerUser, user } = useAuth()
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    },)

    const handelSubmit = (e) => {
        e.preventDefault()
        registerUser(userdata);

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-active py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-semibold font-sans text-inactive">Sign up for an account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
                    <div className="rounded-md shadow-sm space-y-2">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-inactive focus:z-10 sm:text-sm" placeholder="Name" onChange={(e) => {
                                setUserdata(prev => ({ ...prev, name: e.target.value }))
                            }} />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-inactive focus:z-10 sm:text-sm" placeholder="Email address" onChange={(e) => {
                                setUserdata(prev => ({ ...prev, email: e.target.value }))
                            }} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="text" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-inactive focus:z-10 sm:text-sm" placeholder="Password" onChange={(e) => {
                                setUserdata(prev => ({ ...prev, password: e.target.value }))
                            }} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-active bg-inactive   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-inactive" >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
