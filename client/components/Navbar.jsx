"use client";
import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { TouchableOpacity, Dimensions } from "react-native-web";
import { FlipFlopLoader } from "react-awesome-loaders";

import styles from "../app/globals.css";
import { useGlobalValues } from "../context/global.context.js";

const Navbar = () => {
   const router = useRouter();
   const pathname = usePathname();
   const { pageLoading } = useGlobalValues();

   const vw = Dimensions.get("window").width;

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

   if (pageLoading) return;

   return (
      <div id='navbar'>
         <TouchableOpacity
            style={{ display: "flex", flexDirection: "row" }}
            onPress={fetchHome}>
               <FlipFlopLoader
                  textBeforeRing={"c"}
                  textAfterRing={<span style={{ letterSpacing: 1,}} >deSpace</span>}
                  ringShiness={50}
                  //size={vw < 1440 ? vw * 0.12 : vw * 0.043 }
                  textColor='white'
                  ringColor='#27fbb4'
               />
         </TouchableOpacity>
      </div>
   );
};

export default Navbar;
