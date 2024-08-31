import React, { FormEvent, ChangeEvent, useState } from "react";

type Props = {
  title: string;
  imagen: string;
};

export const CardCompras = () => {
  const [item, setItem] = useState<Props>({ title: "", imagen: "" }); 
  const [listItems, setListItems] = useState<Props[]>([]);  

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setListItems([...listItems, item]);  
    setItem({ title: "", imagen: "" });  
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setItem({...item,[name]: value,  
    });
    
  };

  return (
    <div>
      <form style={{ display: "flex", justifyContent: "center" }} onSubmit={handleSubmit}>
        <div style={{ marginRight: "10px" }}>
          <label htmlFor="imagen-input">Imagen</label>
          <input
            type="url"
            id="imagen-input"
            name="imagen"
            value={item.imagen}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="title-input">Título</label>
          <input
            type="text"
            id="title-input"
            name="title"
            value={item.title}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Agregar</button>
      </form>

      <div>
        {listItems.map((listItem, index) => (
          <div key={index}>
            <h3>{listItem.title}</h3>
            <img src={listItem.imagen} alt={listItem.title} style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        ))}
      </div>
    </div>
  );
};
