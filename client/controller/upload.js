import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const api = process.env.NEXT_PUBLIC_API_URL;


const upload = async ({ title, code, setMessage }) => {
   setMessage(
      <h1 style={{ color: "orange", fontSize: "4vw", marginTop: "-1vh" }}>
         please wait...
      </h1>
   );

   if (title?.trim() === "" || code?.trim() === "") {
      setMessage(
         <h1 style={{ color: "red", fontSize: "4vw", marginTop: "-1vh" }}>
            all the fields are required!
         </h1>
      );
      return;
   }

   setMessage(
      <h1 style={{ color: "green", fontSize: "4vw", marginTop: "-1vh" }}>
         upload...
      </h1>
   );

   try {
      const res = await axios.post(`${api}/upload`, { code, title });
      if (res.status === 200){
         setMessage(
            <h1 style={{ color: "green", fontSize: "4vw", marginTop: "-1vh" }}>
               upload successfull.
            </h1>
         );
         toast.success("code uploaded successfully 🥳.");}
      else{
         setMessage(
            <h1 style={{ color: "red", fontSize: "4vw", marginTop: "-1vh" }}>
               upload failed.
            </h1>
         );
         
         toast.error("code uploading failed.");
      }
   } catch (error) {
      setMessage(
         <h1 style={{ color: "red", fontSize: "4vw", marginTop: "-1vh" }}>
            upload failed: {error.message}
         </h1>
      );
         toast.error("code uploading failed.");
      console.log(error);
   }
};

export default upload;
