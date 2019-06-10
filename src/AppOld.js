import React, { useState, useEffect } from 'react';
//o useEffect permite que usemos o ciclo de vida do componente
//Ele é o mesmo para: componentDidMout, ComponentDidUpdate, ComponentWillUnmount

export default function App() {
  //dentro de useState tem um array vazio para representar o valor inicial
  //usando a desestruturacao, retiramos dois indices
  // o primeiro indice é o valor do estado
  // o segundo indice é uma funcao que vai permitir atualizar o valor do primeiro indice
  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1' },
    { id: 2, name: 'repo-2' },
    { id: 3, name: 'repo-3' },
  ])
  function handleAddRepository() {
    setRepositories([...repositories, {id: Math.random(), name: 'Novo-repo'}])
  }
  return (
    <>
      <ul>
        {repositories.map(
          repo => <li key={repo.id}>{repo.name}</li>
        )}
      </ul>
      <button onClick={handleAddRepository} >
        Adicionar Repositorio
      </button>
    </>
  )
}

