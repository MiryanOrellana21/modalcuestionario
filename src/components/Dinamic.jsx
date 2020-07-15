import React from 'react'
const title = React.createElement('h1', {}, 'My First React Code');
const Container = React.createElement('div', {}, title);
function Dinamic (){
    const crearElemento=()=>{
        console.log('crear el pinche elemento');
        
    }
    return (
        <div>
            {Container}
            <button onClick={crearElemento}>crear elemento</button>
        </div>
    )
}
export default Dinamic