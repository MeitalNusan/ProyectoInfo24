import React, { ReactNode } from 'react';


type Props = {
    title:string,
    children: ReactNode,
    
}

export const Card = ({title, children}: Props) =>{
    return(
        <div>
             <h1>{title}</h1>
                {children}
        </div>
       
    )
}