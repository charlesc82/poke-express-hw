import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#207394',
    };

function Show(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
  
    return (
        <div style={myStyle}>
            <h1>See all the Pokemon!</h1>
            <h2> {props.pokemon.name.charAt(0).toUpperCase()+props.pokemon.name.slice(1)}</h2>
            <img src ={`${props.pokemon.img}`} alt ={props.pokemon.name}></img>
            
        </div>
    )
}

export default Show