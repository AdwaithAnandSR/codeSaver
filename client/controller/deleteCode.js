import axios from "axios";
const api = process.env.NEXT_PUBLIC_API_URL;

const deleteCode = async (id) => {
   try {
      const res = await axios.post(`${api}/deleteCode`, { id });
      if (res.status === 200) return true;
      else return false;
   } catch (error) {
      return false;
   }
};

export default deleteCode;
