import axios from "axios";
const api = "https://codespace-drvu.onrender.com";

const getCodes = async () => {
   try {
      const res = await axios.get(`${api}/getCodes`);
      if (res.status === 200) {
         return res.data.codes;
      }
   } catch (error) {
      return []
   }
};

export default getCodes;
