import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoReceta from './components/ListadoRecetas';
//ContextAPI
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';
function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header 
            title='Find your drink'
          />

          <div className='container mt-5'>
            <div className='row'>
              <Formulario />
            </div>
            <ListadoReceta />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
