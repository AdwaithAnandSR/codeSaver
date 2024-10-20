"use client";
import { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native-web";
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

   const copyCodeToClipboard = code => {
      navigator?.clipboard?.writeText(code);
      toast.success("code copied to clipboard.");
   };
   const copyIdToClipboard = id => {
      alert(id)
      navigator?.clipboard?.writeText(id);
      toast.success("_id copied to clipboard.");
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
                     onPress={() => copyCodeToClipboard(item.code)}
                     key={index}
                     style={{
                        backgroundColor: "#242424",
                        borderRadius: 23,
                        height: "9vh",
                        marginHorizontal: "2vw",
                        paddingLeft: "4vw",
                        display: "flex",
                        justifyContent: 'center',
                     }}>
                     <Text
                        numberOfLines={1}
                        style={{
                           color: "white",
                           fontSize: "4vw",
                           width: '80%',
                           fontWeight: 'bold',
                        }}>
                        {item.title}
                     </Text>
                     <TouchableOpacity
                        onPress={() => copyIdToClipboard(item._id)}
                        style={{
                           color: "white",
                           fontSize: "3.5vw",
                           position: "absolute",
                           right: "5%",
                           top: "75%",
                           zIndex: 50,
                           color: '#a1a1a1d9',
                        }}>
                        {item._id}
                     </TouchableOpacity>
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
