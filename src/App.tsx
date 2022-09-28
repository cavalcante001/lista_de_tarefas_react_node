
import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { ListItem } from './Components/ListItem';
import { AddArea } from './Components/AddArea';
import { api } from './Services/api';
import { Tarefa } from './Types/Tarefa';
const App = () => {

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      const json = await api.getAllNotes();
      setTarefas(json.lista);
    } catch(e) {
      alert(e);
    }
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header> LISTA DE TAREFAS: </C.Header>

        <AddArea recarregarLista={carregarTarefas}/>

        {tarefas.map((item,index) => (
          <ListItem key={index} item={item} />
        ))}
        
      </C.Area>
    </C.Container>
  );
}

export default App;