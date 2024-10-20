"use client";
import { useState } from "react";
import { TouchableOpacity } from "react-native-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PasswordModel from "../../components/PasswordModel.jsx";
import deleteCode from "../../controller/deleteCode.js";
const Page = () => {
   const [isModelOpen, setIsModelOpen] = useState(true);

   const handlePasswordSubmit = pass => {
      const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
      if (pass.trim() === password) setIsModelOpen(false);
   };

   const handleDelete = async () => {
      const id = document.getElementById("id").value;
      if (id) {
         const res = await deleteCode(id);
         if (res) toast.success("successfully deleted.");
         else toast.error("delete code failed.");
      }
   };

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            alignItems: "center",
            marginTop: "10vh"
         }}>
         <PasswordModel isOpen={isModelOpen} onSubmit={handlePasswordSubmit} />
         <h1>Delete Code</h1>
         <input
            id='id'
            placeholder='enter _id here..'
            style={{
               width: "85%",
               height: "4vh",
               borderRadius: 23,
               border: 0,
               backgroundColor: "#2c2c2c",
               color: "white",
               padding: "3vw"
            }}></input>
         <TouchableOpacity
            onPress={handleDelete}
            style={{
               backgroundColor: "red",
               width: "85%",
               height: "5vh",
               borderRadius: 23,
               color: "white",
               border: 0,
               display: "flex",
               justifyContent: "center",
               alignItems: "center"
            }}>
            Delete
         </TouchableOpacity>
         <ToastContainer
            position='bottom-center'
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme='dark'
         />
      </div>
   );
};

export default Page;
