import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_URL;

const getCodes = async () => {
   try {
      const res = await axios.get(`${api}/getCodes`);
      if (res.status === 200) {
         return res.data.codes;
      }
   } catch (error) {
      return [];
   }
};

export default getCodes;
