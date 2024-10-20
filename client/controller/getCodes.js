import axios from "axios";
const api = "http://100.89.95.174:4000";

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
