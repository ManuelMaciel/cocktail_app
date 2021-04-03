import React, { createContext, useEffect, useState } from 'react';

//exportar el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

  //useState
  const [ idreceta, setIdReceta ] = useState(null);
  const [ receta, setReceta ] = useState({});
  //llamar a la api cuando idReceta cambie
  useEffect(() => {
    const consultarAPI = async () => {
      if(!idreceta) return null;
      const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setReceta(resultado.drinks[0]);
    }
    consultarAPI();
  }, [idreceta])
  return (  
    <ModalContext.Provider
      value={{
        idreceta,
        receta,
        setIdReceta,
        setReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}
 
export default ModalProvider;

