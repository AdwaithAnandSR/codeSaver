"use client";
import { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../components/Navbar.jsx";
import getCodes from "../../controller/getCodes.js";
import { useGlobalValues } from "../../context/global.context.js";

export default function YourComponent() {
   const [codes, setCodes] = useState([]);
   const { setPageLoading } = useGlobalValues();

   useEffect(() => {
      const fetchCodes = async () => {
         const res = await getCodes();
         if (res) {
            setCodes(res);
            setPageLoading(false);
         }
      };
      fetchCodes();
   }, []);

   const copyCodeToClipboard = code => {
      navigator?.clipboard?.writeText(code);
      toast.success("code copied to clipboard.");
   };
   const copyIdToClipboard = id => {
      navigator?.clipboard?.writeText(id);
      toast.success("_id copied to clipboard.");
   };

   return (
      <div id='codeContainer'>
         {codes.length < 1 ? (
            <h4 style={{ margin: "2vw" }}>loading..</h4>
         ) : (
            codes.map((item, index) => (
               <TouchableOpacity
                  onPress={() => copyCodeToClipboard(item.code)}
                  key={index}
                  id='codeItem'>
                  <Text numberOfLines={1} id='codeTitle'>
                     {item.title}
                  </Text>
                  <TouchableOpacity
                     onPress={() => copyIdToClipboard(item._id)}
                     id='idContainer'>
                     <Text numberOfLines={1} id='idText'>
                        {item._id}
                     </Text>
                  </TouchableOpacity>
               </TouchableOpacity>
            ))
         )}
      </div>
   );
}
