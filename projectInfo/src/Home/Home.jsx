import styles from "../Home/Home.module.css"
import { Nav } from "../components/Nav/Nav"
import { ListenAgain } from "../ListenAgain/ListenAgain"
import { Card } from "../components/ContactCard/Card"
import { ImgPerfil } from "../components/ImgPerfil/ImgPerfil"
import { Recomended } from "../RecomendedAlbums/Recomended"
import { Contador } from "../EjerciciosClase/eventos/contador"
import { Estados } from "../EjerciciosClase/Estados Complejos/estadosComplejos"
import { Compras } from "../EjerciciosClase/Compras/Compras"
import { CardCompras } from "../EjerciciosClase/CardCompras/CardCompras"
import { Sidebar } from "../Sidebar/Sidebar"
import { Galletitas } from "../EjerciciosClase/EjercicioGalletitas/galletitas"
import { Formulario } from "../EjerciciosClase/Formularios/Formulario"
 
 


export const Home = () =>{
    return(
        <div className={styles.home}>

             <ListenAgain />
           
            <Recomended />  


          {/*  <Estados/>

            <Formulario/>
              
            <Compras/>

            <CardCompras/>


           <Galletitas/> */}
        </div> 
        
    )
}