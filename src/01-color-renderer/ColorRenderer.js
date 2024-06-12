import React from "react";
import Color from "./Color";

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}];

function ColorRenderer() {
  return (
    <div className="container">
      {colors.map((item) => (
        <Color color={item.hex} colorName={item.name} /> 
      ))}
    </div>
  )
}

export default ColorRenderer;