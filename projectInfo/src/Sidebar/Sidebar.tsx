 import { ImgPerfil } from "../components/ImgPerfil/ImgPerfil";
import styles from "../Sidebar/sidebar.module.css"
 import React, { useState, FormEvent, ChangeEvent } from "react";



export const Sidebar = () =>{

const [playList, setPlayList] = useState<string>("");
const [form, setForm] = useState<boolean>(false)
const [imagen, setImage] = useState("")



const PlayListButton =({nueva}) => {
    return <button onClick={nueva}>Nueva Playlist</button>   
}

const handleForm = () => {
    setForm(true)
}

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {   
    setPlayList(e.target.value)   
 };
const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {   
    setImage(e.target.value)   
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
            
            <PlayListButton nueva={handleForm}/>
           {form && 
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
            </form>}
            <p>{playList}</p>
            <img src={imagen} alt="" />
        </div>
        
    )
}

 