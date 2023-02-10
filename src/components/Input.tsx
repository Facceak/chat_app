import React from "react";

type DataProps = {
    placeholder: string;
    type: string;
    onChange: (e: any) => void;
}

const Input = ({type, placeholder, onChange}: DataProps)=>{
    return <input onChange={onChange} placeholder={placeholder} type={type} style={styles.container}/>
}

const styles = {
    container: {
        width: "100%",
        height: "40px",
        border: "0",
        outline: "0",
        borderRadius: "10px",
        margin: "5px",
        backgroundColor: "#111D32",
        color: "white",
        padding: "0px 20px"

    }
}

export default Input;