import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'scroll',
    height: '100%',
    maxHeight: 500,
    display: 'block'
    },
    header: {
    padding: '12px 0',
    borderBottom: '1px solid darkgrey'
    },
    content: {
    padding: "12px 0",
    overflow: 'scroll'
    }
}));

const Receta = ({r}) => {
  //configuracion material-ui
  const [ modalStyle ] = useState(getModalStyle);
  const [ open, setOpen ] = useState(false);
  const classes = useStyles();
  //al abrir o al cerrar el modal cambia el state
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  //context
  const {receta, setIdReceta, setReceta} = useContext(ModalContext);

  //muestra la informacion
  const mostrarIngredientes = receta => {
    let ingredientes = [];
    for(let i=1; i<16; i++){
      if(receta[`strIngredient${i}`]){
        ingredientes.push(
          <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes;
  }

  return (  
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{r.strDrink}</h2>
        <img src={r.strDrinkThumb} alt={`Image ${r.strDrink}`} />
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={() => {
              setIdReceta(r.idDrink);
              handleOpen();
              setReceta({});
            }}
          >
            See more details
          </button>
          <Modal
            open={open}
            onClose={() =>{
              setIdReceta(null);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{receta.strDrink}</h2>
              <h3 className='mt-4'>Instructions</h3>
              <p>{receta.strInstructions}</p>
              <h3 className='mt-4'>Glass</h3>
              <p>{receta.strGlass}</p>
              <h3 className='mt-4'>Ingredients and Measures</h3>
              <ul>
                {mostrarIngredientes(receta)}
              </ul>
              <img 
                className='img-fluid my-4' 
                src={receta.strDrinkThumb}
                alt={`Image ${r.strDrink}`} 
              />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
 
export default Receta;