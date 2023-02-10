import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import API from "../api";
import mobilePng from "../assets/mobile.png"; 

var WarningShow: boolean = false
const ShowWarning = ()=>{
    const container = document.getElementById("warningMessage");
    setTimeout(()=>{
        WarningShow = true;
    }, 3000);
    WarningShow = false;
    
}

const postLogin = async (path: string, data: any)=>{
    const response = await API.post(path, data);
}

const LoginPage = () =>{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return <div style={styles.container}>
        <p style={styles.warningMessage}>LOGIN</p>
        <div style={styles.form}>
            <div style={styles.inputContainerAll}>
                <div style={styles.inputContainer}>
                    {/* <div style={styles.inputLogo}>
                        X
                    </div> */}
                    <Input onChange={e => setUsername(e.target.value)} placeholder="username" type="text"/>
                </div>
                <div style={styles.inputContainer}>
                    {/* <div style={styles.inputLogo}>
                        X
                    </div> */}
                    <Input onChange={e => setPassword(e.target.value)} placeholder="···············" type="password"/>
                </div>
                <Button 
                    onClick={()=> postLogin("/registration", {
                        username: username, 
                        password: password
                    })} 
                    text="Einloggen" 
                    color="#111D32"
                />
                <p style={styles.orText}>or</p>
                <Button onClick={()=> ShowWarning()} text="Facebook" color="#315AC3"/>
                <Button onClick={()=> postLogin("/xx", "10")} text="Google" color="#C33131"/>
                <Button onClick={()=> postLogin("/xx", "10")} text="Instagram" color="#C33189"/>
            </div>
        </div>
    </div>
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column" as "column",
        padding: "0px 50px",
        backgroundColor: "#111D32"
    },
    form: {
        margin: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column" as "column",
        minWidth: "250px",
        width: "50%",
        maxWidth: "500px",
        borderRadius: "10px",
        backgroundColor: "#232E44",
        padding: "40px 40px",
    },
    inputContainerAll: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column' as 'column'
    },
    inputContainer: {
        // width: "100%",
        display: "flex",
        alignItems: "center",
        // backgroundColor: "#111D32"
    },
    inputLogo: {
        width: "40px",
        height: "40px",
        backgroundColor: "#111D32",
        color: "white",
        margin: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px"
    },
    orText: {
        width: "100%",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "grey",
        margin: "5px 0px",
        borderTop: "0px solid grey",
        borderBottom: "1px solid grey"
    },
    warningContainer: {
        position: "absolute" as "absolute",
        top: "5%",        
        minWidth: "250px",
        width: "50%",
        maxWidth: "500px",
        height: "80px",
        flexDirection: "column" as "column",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: "0", 
        borderRadius: "10px",
        backgroundColor: "#C33131",
        filter: "drop-shadow(0px 0px 15px #C33131)"
    },
    warningMessage: {
        position: "absolute" as "absolute",
        top: "5%",        
        minWidth: "250px",
        width: "50%",
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        height: "50px",
        lineHeight: "0", 
        borderRadius: "10px",
        backgroundColor: "#C33131",
        filter: "drop-shadow(0px 0px 15px #C33131)"
    }

}
export default LoginPage;