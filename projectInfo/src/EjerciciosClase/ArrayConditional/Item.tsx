import React from "react";


type Props = {
  name: string;
  isDone: boolean;
};

 export const Item = ({name, isDone}) =>{
  return (
    <div>    
    <p>{isDone? (
      <div>
        <del>{name}</del>  
      </div>
    ) : (
      <div>{name}</div>
    )} 
    </p>      
    </div>
  )
 } 