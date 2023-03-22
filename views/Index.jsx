import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#207394',
    };

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
  
    return (
        <div style={myStyle}>
            <h1>See all the Pokemon!</h1>
            <ul>
                {props.pokemon.map((poke, index) => 
                    <li key={index}>
                        <p>{poke.name.charAt(0).toUpperCase()+poke.name.slice(1)}</p>
                        <a href={`/pokemon/${poke._id}`}>Click here for Pokemon Stat</a>
                    </li>
                
                )}
            </ul>
            
        </div>
    )
}

export default Index