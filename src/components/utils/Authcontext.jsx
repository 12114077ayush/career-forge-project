/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { account } from '../../appwrite/Appwrite'
import { ID } from "appwrite";
import { motion } from "framer-motion";
import { Scale } from "chart.js";

const blinkVariants = {
    blink: {
    scale: 1.1,
        transition: {
        yoyo:Infinity
    }
 }
}


export const Authcontext = createContext()

export const Authprovider = ({ children }) => {

    const [loading, setloading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        checkUserStatus()
    }, [])

    const loginUser = async (userInfo) => {
        setloading(true)
        try {
            let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)

            if (response) {
                let userDetails = await account.get();
                console.log(userDetails);
                setUser(userDetails);
            }

        } catch (error) {
            console.log(error);
        }

        setloading(false)
    }
    const logoutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }
    const registerUser = async (userInfo) => {
        setloading(true)
        try {
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name)
            if (response) {
                // this.loginUser(userInfo);
                let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password)

                if (response) {
                    let userDetails = await account.get();
                    console.log(userDetails);
                    setUser(userDetails);
                }
            }
        } catch (error) {
            console.log(error);
        }
        setloading(false)
    }
    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get()
            setUser(accountDetails)
        } catch (error) {
            console.log(error);
        }
        setloading(false)
    }

    const contextdata = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus
    }

    return (
        <Authcontext.Provider value={contextdata}>
            {loading ? <motion.p whileInView={{ scale: [1,1.2,1,1.2,1,1.2,1,1.2,1,1.2,1,1.2,1], transition: { duration:5}}} className=" text-inactive font-Pacifico m-auto mt-[50vh] text-6xl flex justify-center ">Career Forge</motion.p> : children}
        </Authcontext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(Authcontext)
}

