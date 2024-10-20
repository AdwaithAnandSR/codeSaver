"use client";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/Navbar.jsx";
import getCodes from "../../controller/getCodes.js";

export default function YourComponent() {
   const [codes, setCodes] = useState([]);

   useEffect(() => {
      const fetchCodes = async () => {
         const res = await getCodes();
         if (res) {
            setCodes(res);
         }
      };
      fetchCodes();
   });

   const copyToClipboard = code => {
      navigator.clipboard.writeText(code);
      toast.success("copied to clipboard.");
   };

   return (
      <div>
         <Navbar />
         <div
            style={{
               display: "flex",
               flexDirection: "column",
               gap: "2vh",
               marginTop: "15vh",
               marginBottom: "5vh"
            }}>
            {codes.length < 1 ? (
               <h4 style={{ margin: "2vw" }}>loading..</h4>
            ) : (
               codes.map((item, index) => (
                  <TouchableOpacity
                     onPress={() => copyToClipboard(item.code)}
                     key={index}
                     style={{
                        backgroundColor: "#242424",
                        padding: "1vh",
                        borderRadius: 23,
                        marginHorizontal: "2vw"
                     }}>
                     <h3
                        style={{
                           color: "white",
                           fontSize: "6vw",
                           marginLeft: "3vw"
                        }}>
                        {item.title}
                     </h3>
                  </TouchableOpacity>
               ))
            )}
         </div>

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
}
