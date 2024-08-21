import styles from "../Buscador/buscador.module.css"
import { FaSearch } from "react-icons/fa";


export const Buscador = () =>{
    return(
        <div>
            <input  
            className={styles.buscador} 
            type="text" 
            placeholder="Buscador"
            />
            <button><FaSearch/></button>
         </div>
    )
}