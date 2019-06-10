import React, { useState, useEffect } from 'react';

export default function App() {
  const [repositories, setRepositories] = useState([
  ])

  //para carregar os dados da api usando o hoocks eé usado o useEffect
  //ele recebe dois parametros.
  //O primeiro eé uma funcao que pode ser executada
  //podemos pensar nessa funcao como se fosse o corpo da funcao componentDidMout, componentDidUpdate, componentWillUmount...
  //O segundo paramentro deve ser entendido como em qual circunstancia a funçao deve ser executada
  //E as circunstancias sao variaveis. Entao, ao declararmos uma variavel, gaarntimos que o efeito so ira ser disparado quando a variavel mudar no estado
  //podemos passar varias variaveis dentro do array do useeffects 
  //podemos ter quantos efeccts acharmos necessario
  useEffect( async () => {
    const response = await fetch('https://api.github.com/users/diego3g/repos')
    const data = await response.json()

    setRepositories(data)
  }, [] )

  //garantimos que esse efeito so sera disparado se houver alteracao no componente (componentDidUpdate)
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite)

    document.title = `Voçê tem ${filtered.length} Favoritos`
  }, [repositories] )
    

  function handleFavorite(id) {
      const newRepositories = repositories.map(repo => {
        return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
      })

      setRepositories(newRepositories)
    }
  return (
    <>
      <ul>
        {repositories.map(
          repo => <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span> (Favorito) </span>}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        )}
      </ul>
    </>
  )
}

