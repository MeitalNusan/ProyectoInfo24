import { useState } from "react"

export const Contador = () =>{

    const [contador, setContador] = useState(0)
     

    const sumar = () =>{
        if (contador < 10){
            setContador(contador + 1)
        }
        
    }
    const restar = () =>{
        if (contador > 0){
            setContador(contador - 1)
        }
        
    }

    return(
        <div>
            <div>
                <p>{contador}</p>
                <button onClick={() => sumar()}>+</button>
                <button onClick={() => restar()}>-</button>
            </div>
           
        </div>
       
    )
}