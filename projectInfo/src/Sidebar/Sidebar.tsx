 import { ImgPerfil } from "../components/ImgPerfil/ImgPerfil";
import styles from "../Sidebar/sidebar.module.css"
import React, { useState, FormEvent, ChangeEvent } from "react";
import { Form } from "../SideForm/Form";

 
export const Sidebar = () =>{
 
    const [playList, setPlayList2] = useState<string>("");
    const [imagen, setImage2] = useState("")


    return( 
       <Form playList={playList} imagen={imagen} setPlayList={setPlayList2} setImagen={setImage2}/>
    )
}

 