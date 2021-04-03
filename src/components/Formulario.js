import React, { useContext, useState } from 'react';

import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
const Formulario = () => {

  //useState
  const [ busqueda, setBusqueda ] = useState({
    ingredient: '',
    category: ''
  });

  const leerDatos = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const {categorias} = useContext(CategoriasContext);
  // console.log(categorias);
  const {guardarBusqueda} = useContext(RecetasContext);

  const enviarDatos = e => {
    e.preventDefault();
    guardarBusqueda(busqueda);
  }
  return (  
    <form
      className='col-12'
      onSubmit={enviarDatos}
    >
      <fieldset className='text-center'>
        <legend>Search for Drinks by Category or Ingredients</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4 pb-2'>
          <input 
            type='text'
            name='ingredient'
            className='form-control'
            placeholder='Find by ingredient'
            onChange={leerDatos}
          />
        </div>
        <div className='col-md-4 pb-2'>
          <select
            name='category'
            className='form-control'
            onChange={leerDatos}
          >
            <option value=''>--Select Category--</option>
            {categorias.map(categoria => (
              <option 
                key={categoria.strCategory} 
                value={categoria.strCategory}
              >{categoria.strCategory}</option>
            ))}
          </select>
        </div>
        <div className='col-md-4'>
          <input 
            type='submit'
            value='Find your drink'
            className='btn btn-block btn-primary'
          />
        </div>
      </div>
    </form>
  );
}
 
export default Formulario;