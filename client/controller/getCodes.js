import axios from "axios";
<<<<<<< HEAD
const api = process.env.NEXT_PUBLIC_API_URL;
=======
const api = "https://codespace-drvu.onrender.com";
>>>>>>> 22056652c402608e5979b48c3a87149f082325cf

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
