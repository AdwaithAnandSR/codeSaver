"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-web";
import styles from "../app/globals.css";

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
      <div id='navbar'>
         <TouchableOpacity
            style={{ display: "flex", flexDirection: "row" }}
            onPress={fetchHome}>
            <h1>
               CodeSpac
               <span
                  style={{
                     textShadow: "1px 1px 3px #19deea"
                  }}>
                  e
               </span>
            </h1>
         </TouchableOpacity>
      </div>
   );
};

export default Navbar;
