import React from 'react';
import { Card } from '../components/ContactCard/Card';
import styles from "./../Home/Home.module.css"
import { bd } from '../BD/bd';


export const Recomended = () => {
    
    const { album2 } = bd();
   
    return(
    <Card title={<p className={styles.title}>Recomended Albums</p>}>
        <div className={styles.conteiner} >
        {album2.map((album) => (
            <div key={album.id}>
            <button><img className={styles.image} src={album.image} alt="" /></button>
            <h2>{album.name}</h2>
            <p>{album.Subtitle}</p>
 
            </div>
        ))}
</div>
</Card>
    )
}