"use client"; // Marks the component as a Client Component

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
<<<<<<< HEAD
   const api = process.env.NEXT_PUBLIC_API_URL;

=======
   const api = "https://codespace-drvu.onrender.com";
   
>>>>>>> 22056652c402608e5979b48c3a87149f082325cf
   const router = useRouter();

   const fetchHealth = async () => {
      try {
         const res = await axios.get(`${api}/health`);
         return res.status === 200;
      } catch (error) {
         alert(error.message);
         console.error("Error fetching health:", error);
         return false;
      }
   };

   const initApp = async () => {
      const isConnected = await fetchHealth();
      if (isConnected) {
         router.push("/home");
      } else {
         console.log("Retrying in 10 seconds...");
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
      </div>
   );
}
