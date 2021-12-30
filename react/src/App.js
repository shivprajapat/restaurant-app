import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import RestauranstList from "./components/RestauranstList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantUpdate from "./components/RestaurantUpdate";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<RestauranstList />} />
        <Route path="/create" element={<RestaurantCreate />} />
        <Route path="/search" element={<RestaurantSearch />} />
        <Route path="/details" element={<RestaurantDetail />} />
        <Route path="/update" element={<RestaurantUpdate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
