import React, { createContext, useState, useEffect } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  
  //useState
  const [ receta, setReceta] = useState([]);
  const [ busqueda, guardarBusqueda ] = useState({
    ingredient: '',
    category: ''
  });
  //useEffect
  useEffect(() =>{
    if(busqueda.ingredient === '' || busqueda.category === '') return;
    const {ingredient, category} = busqueda;
    const obtenerReceta = async () => {
      const urlReceta = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
      const respuesta = await fetch(urlReceta);
      const resultado = await respuesta.json();
      // console.log(resultado.drinks);
      setReceta(resultado.drinks);
    }
    obtenerReceta();
  }, [busqueda]);

  return (  
    <RecetasContext.Provider
      value={{
        receta,
        guardarBusqueda
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
}
 
export default RecetasProvider;