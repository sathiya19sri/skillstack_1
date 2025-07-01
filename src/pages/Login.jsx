import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase/firebaseConfig";
import { useNavigate, useNavigation } from "react-router-dom";

function Login(){
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await
    signInWithEmailAndPassword(auth, email, password);
            alert("Login successfull !");
            navigate("/Dashboard");
        }
        catch(err){
            setError("Login failed:" + err.message);
        }
    };
    return(
        <div style={style.container}>
            <h2>Skillstack login</h2>
            <form onsubmit={handleLogin} style={style.form}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} style={Styles.input}/>
                  {error && <p style={{ color: "red"}}>{error}</p>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
            <p>
                    Don't have an account? <a href="/register">register</a>
            </p>

        </div>
    );
}

const style = {
    container:{
        display: "flex", flexDirection: "colomn", aligItems: "center", marginTop: "100px"
    },
    form:{
        display: "flex", flexDirection: "column", width:"300px", gap: "15px"
    },
    input:{
        padding: "10px", fontSize: "16px"
    },
    button:{
        padding: "10px", fontSize: "16px", backgroundColor: "#377DFF", color: "white", border: "none", cursor: "pointer"
    }
};

export default Login;