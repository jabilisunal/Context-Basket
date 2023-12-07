import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";


function Button() {
    return (
      <div>Salam Sona</div>
    )
  }

function MainLayout() {
  return (
    <>
      <Navbar>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default MainLayout;
