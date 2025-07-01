import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate, useNavigation } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };
    return (
        <div style={Styles.container}>
            <h1>Welcome to Skillstack1</h1>
            <P>This is your Dashboard. more features coming soon!</P>
            <button onClick={handleLogout}
            style={styles.button}>logout</button>
        </div>
    );
}

const style ={
    Container: {
        textAlign: "center",
        marginTop: "100px",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundcolor: "#dc3545",
        color: "white",
        border: "none",
        cursor: "pointer"
    }
};

export default Dashboard;