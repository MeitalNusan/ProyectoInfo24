import React, { useState, useEffect } from 'react';

export const ResizeComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el evento cuando se desmonta
    };
  }, []);

  return (
    <div>
      <h1>Tamaño de la ventana:</h1>
      <p>Ancho: {windowSize.width}px</p>
      <p>Alto: {windowSize.height}px</p>
    </div>
  );
};

export const Resize = () => {
  const [showComponent, setShowComponent] = useState(true);

  const handleUnmount = () => {
    setShowComponent(false); // Desmonta el componente
  };

  return (
    <div>
      {showComponent && <ResizeComponent />} {/* Muestra u oculta el componente */}
      <button onClick={handleUnmount}>Desmontar Componente</button>
    </div>
  );
};
 
