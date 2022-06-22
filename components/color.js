//React colors
import React from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

function Color(props){
  const [color, setColor] = useColor("hex", "#121212");
    return (
      <ColorPicker 
        height={props.height}
        width={props.width}
        alpha={true}
        hideHSV={false}
        hideRGB={false}
        hideHEX={false}
        color={color}
        onChange={setColor}  
        dark={true} 
      />
    )
}

export default Color;