import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Home from "./components/home";
import Edit from "./components/edit";
import Create from "./components/create";
import About from "./components/about";
import Confirm from "./components/confirm";
import Barber from "./components/barbers";
import Julian from "./components/julian";
import Kim from "./components/kim";
import Lisa from "./components/lisa";
import Mark from "./components/mark";
import toast, { Toaster } from 'react-hot-toast';
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/about" element={<About />} />
       <Route path="/confirm" element={<Confirm />} />
       <Route path="/barbers" element={<Barber />} />
       <Route path="/julian" element={<Julian />} />
       <Route path="/kim" element={<Kim />} />
       <Route path="/lisa" element={<Lisa />} />
       <Route path="/mark" element={<Mark />} />
     </Routes>
     <Toaster />
   </div>
 );
};
 
export default App;