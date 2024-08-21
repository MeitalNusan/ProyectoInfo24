import React from 'react';
import { Card } from '../components/ContactCard/Card';
import styles from "./../Home/Home.module.css";
import { bd } from '../BD/bd';

export const ListenAgain = () => {
    const { album1 } = bd();

    return(
    <Card title={<p className={styles.title}>Listen Again</p>}>
        <div className={styles.conteiner} >
            {album1.map((album) => (
            <div key={album.id}>
                <img className={styles.image} src={album.image} alt="" />
                <h2>{album.name}</h2>
                <p>{album.Subtitle}</p>
            </div>
        ))}
</div>
</Card>
    )
}