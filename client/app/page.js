"use client"; // Marks the component as a Client Component

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CircleLoader } from "react-awesome-loaders";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function Home() {
   const api = process.env.NEXT_PUBLIC_API_URL;

   const router = useRouter();

   const fetchHealth = async () => {
      try {
         const res = await axios.get(`${api}/health`);
         return res.status === 200;
      } catch (error) {
         toast.error("connection failed: Retrying in 10 seconds...");
         console.error("Error fetching health:", error);
         return false;
      }
   };

   const initApp = async () => {
      const isConnected = await fetchHealth();
      if (isConnected) {
         toast.success("connect to the server.");
         router.push("/home");
      } else {
         toast.error("connection failed: Retrying in 10 seconds...");
         setTimeout(initApp, 10000);
      }
   };

   useEffect(() => {
      initApp();
   }, []);

   return (
      <>
         <div id='initialPage'>
            <h1>CodeSpace</h1>
         </div>
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               width: "100%",
               height: "100%",
               position: "absolute",
               top: "5%",
               opacity: 0.7,
               zIndex: 10
            }}>
            <CircleLoader />
         </div>
      </>
   );
}
