import React from "react";

type DataProps={
    text: string;
    color: string;
    onClick: ()=> void;
}

class Button extends React.Component<DataProps>{
    render() {
        const styles = {
            container: {
                height: "40px",
                backgroundColor: this.props.color,
                margin: "5px",
                color: "white",
                border: "0",
                padding: "0px 15px",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer"
            }
        } 
        return <button 
                    onClick={this.props.onClick}
                    style={styles.container}
                >{this.props.text}</button>
    };
}

export default Button;