import { FiSearch } from 'react-icons/fi'
import "./styles.css";
import { useState } from "react";

import api from './services/api'

function App() {
  const [ input, setInput ] = useState('');
  const [ cep, setCep ] = useState({  });

  async function handleSearch()
  {
    if(input === '')
    {
      alert("Preencha algum CEP");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    } catch {
      alert("Erro ao buscar!");
      setInput('');
    }
  }

  return (
    <div className="container">
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=coloque_sua_chave_aqui"></script>
      <h1 className="title">Buscador de CEP</h1>
      
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setInput(e.target.value) } />
        <button className="buttonSearch"><FiSearch size={25} color='#FFF' onClick={handleSearch}/></button>
      </div>

      { Object.keys(cep).length > 0 && (
        <main>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      ) }
    </div>
  );
}

export default App;
