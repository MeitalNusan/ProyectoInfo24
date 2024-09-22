import { ImgPerfil } from "../components/ImgPerfil/ImgPerfil";
import styles from "../Sidebar/sidebar.module.css"
 import React, { useState, FormEvent, ChangeEvent, Dispatch } from "react";

 type FormProps = {
    playList: Array<string>;
    imagen:string;
    setPlayList:Dispatch<React.SetStateAction<string>>;
    setImagen: Dispatch<React.SetStateAction<string>>
}


export const Form = ({ playList, imagen, setPlayList, setImagen}: FormProps ) =>{

 const [form, setForm] = useState<boolean>(false)
  
 

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {   
    setPlayList(e.target.value)   
 };
const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {   
    setImagen(e.target.value)   
 };


const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setForm(false)
    };

    
const isFormFull = () => {
        return playList && imagen ;
      };


    return( 
       <div className={styles.sidebar}>      
           {form ? (
            <form onSubmit={handleSubmit}>
                <div style={{ marginRight: "10px" }}>
                    <label htmlFor="imagen-input">URL:</label>
                    <input
                    type="url"
                    id="imagen-input"
                    value={imagen}
                    onChange={handleChangeImg}
                    />
                </div>

                <label htmlFor="search-input">Title:</label>
                <input
                    type="text"
                    id="search-input"
                    value={playList}  
                    onChange={handleChange}  
                    autoFocus  
                />
                <button disabled={!isFormFull()} type="submit" >Guardar Playlist</button>
            </form>
            ) : (
                <>     
                <button onClick={() => setForm(true)}>Nueva Playlist</button>
                 </>      
            )}
            
             <p>{playList}</p>
             <img src={imagen} alt="" />
        </div>
        
    )
}

 