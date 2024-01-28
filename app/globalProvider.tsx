"use client";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider, useSelector } from "react-redux";
import { store } from "@/redux/store";

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  
  return (
    <>
      <Provider store={store}>{children}</Provider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default GlobalProvider;
