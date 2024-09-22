import React, { useState } from 'react';

export const MenuHamb = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};
 