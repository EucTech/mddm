"use client";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
