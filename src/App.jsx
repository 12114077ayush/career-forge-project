/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layoutsofapp/Layout";
import Homepage from "./components/homepage/Homepage";
import Aboutus from "./components/aboutus/Aboutus";
import Contactus from "./components/contactus/Contactus";
import Services from "./components/services/Services";
import Login from "./components/loginandsignup/Login";
import Signup from "./components/loginandsignup/Signup";
import Protectedroute from "./components/utils/Protectedroute";
import { Authprovider } from "./components/utils/index";
import Profile from "./components/Profile/Profile";
import JobBoard from "./components/JobBoard/JobBoard";
import JobDetail from "./components/JobBoard/JobDetails";

function App() {
  return (
    <Router>
      <Authprovider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protectedroute />}>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Homepage />} />
              <Route path="about" element={<Aboutus />} />
              <Route path="contact" element={<Contactus />} />
              <Route path="services" element={<Services />} />
              <Route path="/jobs/:jobId" element={<JobDetail />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Authprovider>
    </Router>
  );
}

export default App;
