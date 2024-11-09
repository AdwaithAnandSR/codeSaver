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
            height: isDesktop ? "18vh" : "9vh" ,
            fontSize: isDesktop ? "4vw" : "3.5vw" ,
            marginVertical: '2vh',
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "5vw",
            backgroundColor: 'black',
            color: 'white',
            zIndex: 999,
         }}
         >
         <TouchableOpacity onPress={fetchHome}>
            <h1>CodeSpace</h1>
         </TouchableOpacity>
      </div>
   );
};

export default Navbar;
