import youtube from "../../Images/youtube.jpg"
import styles from "../Nav/nav.module.css"
import { Buscador } from "../Buscador/Buscador"
import { ImgPerfil } from "../ImgPerfil/ImgPerfil"
 
 

export const Nav = () =>{
     return(
        <div>
             <div>
                <ImgPerfil/>
             </div>

             <div className={styles.nav}>
                 <div>
                    <img className={styles.imgNav} src={youtube} alt="" />
                  </div>
                 <Buscador/> 
             </div>

        </div>
       
    ) 
}