import React from "react";
import { FormEvent, ChangeEvent, useState} from "react";


export const Compras = () =>{
   const [item, setItem] = useState<string>("");  
   const [list, setList] = useState<Array<string>>([]);  

 const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
   event.preventDefault()
    const newList = [...list]
    newList.push(item)
    setList(newList)
    setItem("");  


 }
 const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
   setItem(event.target.value)
 }

    return(
     
            <div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="search-input">Username:</label>
                   <input
                  type="text"  
                  id="search-input"
                  value={item}
                  onChange={handleChange}
                  />
                  <button type="submit">Agregar</button>          
                </form> 
                <ul>
                  {list.map((items)=>(
                  <p key={items}>{items}</p>
                ))}
                </ul>
          </div>
                
    )
}
