import React from "react";
import image from "../../Images/foto.jpg"
import styles from "./imgPerfil.module.css"


  

export const ImgPerfil = () => {
    
    return(
        <div>
            <div>
                <img className={styles.perfil} src={image} alt="" />
            </div>
        </div>
    )
}