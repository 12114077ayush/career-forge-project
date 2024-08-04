/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setuser } from "../../Store/userSlice";
import { userDataservice } from "../../appwrite/database/Database";
import { useAuth } from "../utils/Authcontext";

function Profile() {
  const { user, loading, setloading } = useAuth();
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userdata);

  const [userId, setUserId] = useState("");
  const [updatedName, setUpdatedName] = useState(userdata?.name || "");
  const [updatedEmail, setUpdatedEmail] = useState(userdata?.email || "");
  const [updatedSkills, setUpdatedSkills] = useState(userdata?.skills || "");
  const [updatedSchooling, setUpdatedSchooling] = useState(
    userdata?.schooling || ""
  );
  const [updatedAddress, setUpdatedAddress] = useState(userdata?.address || "");
  const [updatedPhone, setUpdatedPhone] = useState(userdata?.phone || "");

  useEffect(() => {
    const fetchUserdata = async () => {
      if (!user) return; // Check if user is available

      try {
        setUserId(user.$id);
        dispatch(setuser({ name: user.name, email: user.email }));

        try {
          const document = await userDataservice.getdatabase({ userId });
          if (document) {
            dispatch(
              setuser({
                name: document.name,
                email: document.email,
                skills: document.skills,
                schooling: document.schooling,
                address: document.address,
                phone: document.phone,
              })
            );
            // Update local state
            setUpdatedName(document.name);
            setUpdatedEmail(document.email);
            setUpdatedSkills(document.skills);
            setUpdatedSchooling(document.schooling);
            setUpdatedAddress(document.address);
            setUpdatedPhone(document.phone);
          } else {
            console.warn("Document not found, creating a new one...");
            await userDataservice.createdatabase({
              name: user.name,
              email: user.email,
              userId: userId,
              skills: "",
              schooling: "",
              address: "",
              phone: "",
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } catch (error) {
        console.error("Error in fetchUserdata:", error);
      }
    };

    fetchUserdata();
  }, [dispatch, user, userId]);

  const handleUpdate = async () => {
    setloading(true);
    const data = {
      name: updatedName,
      email: updatedEmail,
      skills: updatedSkills,
      schooling: updatedSchooling,
      address: updatedAddress,
      phone: updatedPhone,
    };

    try {
      await userDataservice.updatedatabase({
        userId: userId,
        ...data,
      });
      dispatch(setuser(data));
    } catch (error) {
      console.error("Error in handleUpdate:", error);
    } finally {
      setTimeout(() => {
        setloading(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-active pt-7 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-bgcolor rounded-lg shadow-lg shadow-slate-500">
        <h1 className="text-2xl font-bold text-center text-inactive">
          Profile
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block  font-medium text-inactive text-lg">
              Name:
            </label>
            <input
              type="text"
              className=" text-sm mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-inactive">
              Email:
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-inactive">
              Skills:
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              value={updatedSkills}
              onChange={(e) => setUpdatedSkills(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-inactive">
              Specialization:
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              value={updatedSchooling}
              onChange={(e) => setUpdatedSchooling(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-inactive">
              Address:
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              value={updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-inactive">
              Phone:
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
              value={updatedPhone}
              onChange={(e) => setUpdatedPhone(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleUpdate}
            className="w-full mt-8 py-2 px-4 bg-inactive text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
