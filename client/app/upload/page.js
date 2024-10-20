"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "../../components/Navbar.jsx";
import upload from "../../controller/upload.js";

export default function Upload() {
   const [message, setMessage] = useState("");

   const handleUpload = () => {
      const title = document.getElementById("title").value;
      const code = document.getElementById("code").value;
      upload({ title, code, setMessage });
   };

   return (
      <div>
         <Navbar />
         <div
            style={{
               width: "100%",
               height: "80vh",
               display: "flex",
               flexDirection: "column",
               gap: "3vh",
               alignItems: "center",
               marginTop: "10vh"
            }}>
            <input
               id='title'
               placeholder='title'
               style={{
                  width: "85%",
                  height: "3vh",
                  backgroundColor: "#242424",
                  border: "none",
                  borderRadius: 18,
                  marginHorizontal: "auto",
                  marginTop: "5vh",
                  padding: "4vw",
                  color: "white"
               }}></input>

            <textarea
               id='code'
               placeholder='paste your code here...'
               style={{
                  width: "85%",
                  height: "40vh",
                  backgroundColor: "#242424",
                  border: "none",
                  color: "white",
                  borderRadius: 18,
                  marginHorizontal: "auto",
                  padding: "4vw"
               }}></textarea>

            {message}

            <button
               onClick={() => handleUpload()}
               style={{
                  width: "70%",
                  height: "6vh",
                  backgroundColor: "#ea8407",
                  border: 0,
                  borderRadius: 18,
                  color: "white",
                  fontSize: "5vw"
               }}>
               upload
            </button>
            <ToastContainer
               position='top-center'
               autoClose={2000}
               hideProgressBar={false}
               newestOnTop={false}
               rtl={false}
               pauseOnFocusLoss
               draggable
               theme='dark'
            />
         </div>
      </div>
   );
}
