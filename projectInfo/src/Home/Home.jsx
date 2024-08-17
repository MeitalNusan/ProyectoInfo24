import styles from "./Home.module.css"
import { Nav } from "../components/Nav/Nav"
import { ListenAgain } from "../ListenAgain/ListenAgain"
import { Card } from "../components/ContactCard/Card"
import { ImgPerfil } from "../components/ImgPerfil/ImgPerfil"
import { Recomended } from "../RecomendedAlbums/Recomended"
import { Contador } from "../eventos/contador"



export const Home = () =>{
    return(
        <div>
            <div>
               <Nav/> 
            </div>
            
            <div>
                <ListenAgain />
            </div>
            <div>
                <Recomended />
            </div>

           
        </div> 
        
    )
}