"use client"; // Marks the component as a Client Component

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
   });

   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            fontSize: "8vw"
         }}>
         <h1>CodeSpace</h1>
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
