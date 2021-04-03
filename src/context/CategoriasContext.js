import React, { createContext, useState, useEffect } from 'react';

//crear el context
export const CategoriasContext = createContext();
//se crea el provider
//el provider es donde se encuentran las funciones y states
//al provider se le pasan los props
const CategoriasProvider = (props) => {
  
  //crear el state del context
  const [ categorias, setCategorias ] = useState([]);
  //useEffect
  useEffect(() => {
    const obtenerCategorias = async () => {
      const urlCategorias = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const respuestaCategorias = await fetch(urlCategorias);
      const resultadoCategorias = await respuestaCategorias.json();
      setCategorias(resultadoCategorias.drinks);
    }
    obtenerCategorias();
  }, [])

  return (
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
}

export default CategoriasProvider;