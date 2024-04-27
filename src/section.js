import React from 'react';
import pães from './imagens/pães.jpeg'; // Substitua pelo caminho correto para a imagem
import doces from './imagens/doces.jpeg'; // Substitua pelo caminho correto para a imagem
import cafés from './imagens/cafés.jpeg'; // Substitua pelo caminho correto para a imagem
import biscoitos from './imagens/biscoitos.jpeg'; // Substitua pelo caminho correto para a imagem

function Section() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div className="card" style={{width: '18rem'}}>
            <img src={pães} alt="Pães" className="card-img"/>
            <div className="card-body">
              <h5 className="card-title">Pães</h5>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{width: '18rem'}}>
            <img src={doces} alt="Doces" className="card-img"/>
            <div className="card-body">
              <h5 className="card-title">Sonhos</h5>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{width: '18rem'}}>
            <img src={cafés} alt="Cafés" className="card-img"/>
            <div className="card-body">
              <h5 className="card-title">Cafés</h5>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="card" style={{width: '18rem'}}>
            <img src={biscoitos} alt="Biscoitos" className="card-img"/>
            <div className="card-body">
              <h5 className="card-title">Biscoitos</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;