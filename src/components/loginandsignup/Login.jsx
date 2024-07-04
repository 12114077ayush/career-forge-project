/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { account } from '/src/appwrite/Appwrite.js'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/Authcontext';

const Login = () => {

    const navigate = useNavigate()
    const { user, loginUser } = useAuth()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    },)

    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setUserdata(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handelSubmit = (e) => {
        e.preventDefault()

        // console.log(userdata);

        loginUser(userdata);
    }


    return (
     
        <div className="min-h-screen flex items-center justify-center bg-active py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-semibold font-sans text-inactive">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handelSubmit}>
                    <div className="shadow-sm space-y-2">
                        <div>
                            <input id="email-address" name="email" type="text" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-inactive focus:border-inactive focus:z-10 sm:text-sm" placeholder="Email address"
                                onChange={handleChange} />
                        </div>
                        <div>

                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-inactive focus:border-inactive focus:z-10 sm:text-sm" placeholder="Password"
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-inactive">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <NavLink to='/signup' className=" text-inactive font-semibold ">SignUp</NavLink>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-active bg-inactive  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-inactive" >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;











{/* <Route path='' element={<Layout />} >
            <Route path='' element={<Homepage />} />
            <Route path='about' element={<Aboutus />} />
            <Route path='contact' element={<Contactus />} />
            <Route path='services' element={<Services />} />
          </Route> */}