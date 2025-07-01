import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate, useNavigation } from "react-router-dom";

function register(){
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDeefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Registration successful!");
            navigate("/");
              }catch(err){
                setError("Signup failed: "+ err.message);
              }
    };
    return(
        <div style={styles.container}>
        <h2>Create your Skillstack account</h2>
        <form onSubmit={handleRegister} style={style.form}>
          <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} style={Styles.input}/>
          <input
          type="password"
          placeholder="password(min 6 character)"
          value={password}
          onChange={(e) => setpassword (e.target.value) } style={Styles.input} /> 
          {error && <p style={{ color: "red"}}>{error}</p>}
          <button type="submit" style={styles.button}>Sign Up</button>
          <p style={{marginTop:"20px"}}>Already have an account? <a href="/">Login</a></p>
          </form>
        </div>
    );
}
    const styles ={
        container: {
            display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"
            },
         form:{
            display:"flex", flexDirection:"colomn", width:"300px",gap: "15px"
         },
         input:{
            padding: '10px', fontSize:"16px"
         },
         button:{
            padding:"10px", fontSize:"16px", backgroundcolor: "#28a745", color:"white", border: "none", cursor:"pointer"
         }
    };

    export default Register;