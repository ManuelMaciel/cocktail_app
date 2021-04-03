import React, { useContext } from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/RecetasContext';

const ListadoRecetas = () => {

  const { receta } = useContext(RecetasContext);
  
  return (  
    <div className='row mt-5'>
      {receta.map(r => (
        <Receta 
          key={r.idDrink}
          r={r}
        />
      ))}
    </div>  
  );
}
 
export default ListadoRecetas;