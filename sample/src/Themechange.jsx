import React,{useContext} from 'react'
import {useTheme,useThemeUpdate} from './ThemeContext'
function Themechange() {
    const dark=useTheme()
    const change=useThemeUpdate()
    const setting={
        backgroundColor:dark ? "black":"yellow",
        color:dark ? "white" : "black",
        margin:"2em",
        padding:"30px",
        border:"black"
    }
    return (
        <div style={setting}>
           <button onClick={change}>click</button> 
        </div>
    )
}

export default Themechange
