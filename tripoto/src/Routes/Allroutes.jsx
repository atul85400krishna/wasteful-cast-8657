import { Route, Routes } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
// import Homepage from "../components/HomepageMain";
import HomePage from "../components/HomepageMain"
import Packages from "./Packages";
import Singapore from "../components/singapore/Singapore";

import Beach from "../components/beaches/Beach";

import Home_1 from "../components/Home1";
import PrivateRoute from "../components/PrivateRoute";
import SingleCardPage from "../components/SingleCardPage";
import TripPage from "./TripPage";
import Booking from "../components/Booking";
import Payment from "../components/Payment/Payment"
import Admin from "../AdminPayment/Admin/AdminMain"
import Homepage from "../components/HomepageMain";
// import SignUP from "../frontend/my-app/src/components/SignUp/signup";
import Hotels from '../components/products/hotels/Hotels'
import Overview from '../components/products/overview/Overview'
import Place from '../components/products/place/Place'
import Products from '../components/products/Products'
// import Search from '../components/Search';
// import Product from '../components/Product';
import Product from "../components/products/Products"
import Trip from '../components/products/trip/Trip'
 import Seacrh from "../components/Search";

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
      <Route path="/signin" element={<Home_1 />} 

   


      {/* <Route path="/signup" element={<Signup/>} /> */}
      <Route path="/mumbai" element={<Products />}>
          <Route index element={<Overview />} />
          <Route path="/mumbai/trip" element={<Trip />} />
          <Route path="/mumbai/place" element={<Place />} />
          <Route path="/mumbai/hotel" element={<Hotels />} />
          
          
        </Route>

    </Routes>
  );
}
