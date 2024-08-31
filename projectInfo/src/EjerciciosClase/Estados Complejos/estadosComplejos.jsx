import { useState } from "react";


export const Estados = () =>{

const [colors, setColors] = useState(["red", "yellow"])

return(
    <div>
        <button style={{marginTop:"100px"}}
        onClick={() =>{
            if (colors.length < 5) {
                const newColors = [...colors]
                newColors.push("white")
                setColors(newColors)
            }
        }}
        >
        Agregar
        </button>

            <button
            onClick={() =>{
                if (colors.length > 2) {
                    const newColors = [...colors]
                    newColors.pop()
                    setColors(newColors)
                }
            }}
            >
         Eliminar
         </button>

       <div>
        {colors.map((color, index) =>{
            return(
                <div key={index} style={{ backgroundColor: color}}>
                 <p>{color}</p>
                </div>
            )
            
        })
           
        }
       </div>       
    </div>
)
}