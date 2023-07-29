import React, { useState } from "react";

function Square() {
    const [square1Color, setSquare1Color] = useState("red")
    const [square2Color, setSquare2Color] = useState("blue")

    const handleSquare1Click = () => {
        setSquare1Color(setSquare2Color);
        setSquare2Color(setSquare1Color);
    };

    const handleSquare2Click = () => {
        setSquare2Color(setSquare1Color);
        setSquare1Color(setSquare2Color);
    };

    return <>
        <div style={{width: 100, height: 100, backgroundColor: square1Color}} onClick={handleSquare1Click}>
        </div>
        <div style={{width: 100, height: 100, backgroundColor: square2Color}} onClick={handleSquare2Click}>
        </div>
    </>
    

}

export default Square;
