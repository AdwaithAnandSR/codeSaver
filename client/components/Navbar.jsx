"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-web";

const Navbar = () => {
   const router = useRouter();
   const pathname = usePathname();

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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "6vh",
            padding: '2vw',
            backgroundColor: 'black',
            color: 'white',
            position: 'relative',
            zIndex: 999
         }}>
         <TouchableOpacity style={{ marginLeft: '-4vw',}} onPress={fetchHome}>
            <h1>CodeSpace</h1>
         </TouchableOpacity>
         <TouchableOpacity  onPress={fetchUpload}>
            <h3>upload</h3>
         </TouchableOpacity>
      </div>
   );
};

export default Navbar;
