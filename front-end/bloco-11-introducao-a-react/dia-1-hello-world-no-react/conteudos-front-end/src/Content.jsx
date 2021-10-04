import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

function createLi( { conteudo, status, bloco } ) {
  return (
    <div className='card'>
      <p>O conteúdo é: {conteudo}</p>
      <p>Status: {status}</p>
      <p>Bloco: {bloco}</p>
    </div>
  );
}

class Content extends React.Component {
  render() {
    return (
      <div className='cards'>
        {conteudos.map((cont) => createLi(cont))}
      </div>
    )
  }
}

export default Content;