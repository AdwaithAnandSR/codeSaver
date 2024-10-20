// components/PasswordModal.js
import React from "react";

const PasswordModal = ({ isOpen, onSubmit }) => {
   if (!isOpen) return null;

   const [password, setPassword] = React.useState("");

   const handleSubmit = () => {
      onSubmit(password);
      setPassword(""); 
   };

   return (
      <div style={styles.overlay}>
         <div style={styles.modal}>
            <h2>Enter Password</h2>
            <input
               type='password'
               value={password}
               onChange={e => setPassword(e.target.value)}
               style={styles.input}
               placeholder='Enter your password'
            />
            <div style={{
               display: 'flex',
               gap: '3vw',
               position: 'absolute',
               bottom: '20%',
               transform:  'translateX(-50%)' ,
               left: '50%',
            }}>
               <button
                  onClick={handleSubmit}
                  style={{
                     padding: "3vw",
                     width: "30vw",
                     borderRadius: 13,
                     backgroundColor: "green",
                     border: 0
                  }}>
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
};

const styles = {
   overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
   },
   modal: {
      backgroundColor: "#1c1c1c",
      width: "80%",
      height: "40%",
      borderRadius: 15,
      textAlign: "center",
      border: "1px solid #59c9b1",
      position: 'relative',
      paddingTop: '5vh',
   },
   input: {
      padding: "10px",
      borderRadius: 15,
      border: "1px solid #d761d0",
      width: "75%",
      backgroundColor: "#2c2c2c",
      color: 'white',
   },
   button: {
      padding: "10px",
      margin: "5px"
   }
};

export default PasswordModal;
