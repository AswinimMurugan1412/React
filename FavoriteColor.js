import React,{useState}from 'react';

function FavoriteColor(){
    const [color,setColor]=useState("red");
    return(
        <>
        <h1>My FavoriteColor is {color}!</h1>
        <button type ="button"
        OnClick ={()=> setColor("blue")}>Blue</button>
        <button type ="button"
        OnClick ={()=> setColor("red")}>Red</button>
        <button type ="button"
        OnClick ={()=> setColor("green")}>Green</button>
        </>
    );
}
export default FavoriteColor;