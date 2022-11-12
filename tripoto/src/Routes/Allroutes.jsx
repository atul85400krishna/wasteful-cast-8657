import { Route, Routes } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import Homepage from "../Components/HomepageMain";
import Packages from "./Packages";
import Singapore from "../Components/singapore/Singapore";
import SignUp from "../Components/signup"
import Beach from "../Components/beaches/Beach";
import Login from "../Components/LoginIn";
import Home_1 from "../Components/Home1";
import PrivateRoute from "../Components/PrivateRoute";
import SingleCardPage from "../Components/SingleCardPage";
import TripPage from "./TripPage";
import Booking from "../Components/Booking";
import Payment from "../Components/Payment/Payment"
import Admin from "../AdminPayment/Admin/AdminMain"
// import SignUP from "../frontend/my-app/src/Components/SignUp/signup";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/inspirations" element={<Heading>Inspirations</Heading>} /> */}
      <Route path="/inspiration/singapore" element={<Singapore />} />
      <Route path="/inspiration/beach" element={<Beach />}/>
      <Route path="/forum" element={<Heading>Forum</Heading>} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/publish" element={<Heading>Publish</Heading>} />
      <Route path="/partnership/:id" element={<SingleCardPage />} />
      <Route path="/TripPage/:id" element={<TripPage />} />
      <Route path="/" element={<Home_1 />} />
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/admin" element={<Admin/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />


      {/* <Route path="/signup" element={<Signup/>} /> */}
    </Routes>
  );
}
