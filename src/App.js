// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import Menu from './menu.js';
import Imagem from './imagemfundo.js';
import Header1 from './cabecalho1.js';
import Section from './section.js';
import Imagem1 from './produtos.js'
import ImagemC from './carros.js'
import Imagemsobre from './pagesobre.js';
import Imagemsobre2 from './pagesobre2.js';
import Imagemconheça from './conheça.js';
import ContactForm from './forms.js';


const App = () => {
  return (
    <div className="App">
      
      <div className="header1">
      <Imagem/>
      </div>
      <Menu />
      <Header1/>
      <Section/>
      <div className='rectangle'></div>
      <div className='imagemm'>
        <Imagem1/>
      </div>
      <div className='fundomarrom'>
      
      <div className='carro'>
        <ImagemC/>
        </div>
        <div className='carro2'>
        <ImagemC/>
        </div>
        <div className='carro3'>
        <ImagemC/>
        </div>
        <div className='carro4'>
        <ImagemC/>
      </div>
      <Imagemsobre/>
      <Imagemsobre2/>
      </div>
      <Imagemconheça/>
      <div className='rectangle2'></div>
      <ContactForm/>
      </div>
  );
};


export default App;