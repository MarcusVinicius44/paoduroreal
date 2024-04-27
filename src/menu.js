import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import Logo from './logo.js'; // Importe o componente do logo
import './App.css'; // Importe o arquivo CSS criado

function Menu() {
  return (
    <header>
    <nav class="navegacao">
      <Logo/>
        <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Encomendas</a></li>
            <li><a href="#" class="check">Cardápio</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Delivery</a></li>
        </ul>
    </nav>
</header>

  );
}


export default Menu;