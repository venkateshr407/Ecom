
import React from "react";

const PopUpBox ={
    position: "fixed",
    background: "#00000050",
    width: "100%",
    height: "100vh",
    top: "0",
    left: "0"
}

// const Box = {
//     position: "relative",
//     width: "35%",
//     margin: "0 auto",
//     height: "auto",
//     maxHeight: "90vh",
//     marginTop: "calc(100vh - 80vh - 20px)",
//     background: "#fff",
//     borderRadius: "4px",
//     padding: "20px",
//     border: "1px solid #999",
//     overflow: "auto"
// }

const CloseIcon = {
    content: '',
    cursor: "pointer",
    position: 'fixed',
    right: "calc(36% - 60px)",
    top: "calc(100vh - 79vh - 30px)",
    background: "#ededed",
    width: "35px",
    height: '35px',
    backgroundColor:"rgb(246, 35, 52)",
    borderRadius:" 50%",
    lineHeight: "20px",
    textAlign: "center",
    border: "1px solid #999",
    fontSize: "20px",
    padding:"0.3em",
    color:"white"
  }
  
 
const PopUpScreen = props => {
  return (
    <div style={PopUpBox}>
      <div className="Box" >
        <span 
          style={CloseIcon} 
          onClick={props.handleClose}>X
        </span>
        {props.content}
      </div>
    </div>
  );
};
export default PopUpScreen