import React from "react";

function Color(props) {
  return(
    <div style={{backgroundColor: props.color, width: 150, margin: 15, padding: 20}}>
      <h2>{props.colorName}</h2>
    </div>
  )
}

export default Color;