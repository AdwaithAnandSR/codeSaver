"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-web";
import { useMediaQuery } from 'react-responsive'


const Navbar = () => {
   const router = useRouter();
   const pathname = usePathname();
   const isDesktop = useMediaQuery({ minWidth: 768 });

   const fetchHome = () => {
      if (pathname != "/home") {
         router.replace("/home");
      }
   };

   const fetchUpload = () => {
      if (pathname != "/upload") {
         router.replace("/upload");
      }
   };

   return (
      <div
         style={{
            height: window.screen.height * 0.1 ,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "5vw",
            backgroundColor: 'black',
            color: 'white',
            zIndex: 999,
         }}
         >
         <TouchableOpacity style={{ fontSize: window.screen.width * 0.05}} onPress={fetchHome}>
            <h1>CodeSpace</h1>
         </TouchableOpacity>
      </div>
   );
};

export default Navbar;
