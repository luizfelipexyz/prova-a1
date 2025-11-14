import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListarTarefas from './components/listar-tarefa';
import ListarTarefasConcluidas from './components/listar-tarefa-concluida';
import ListarTarefasNaoConcluidas from './components/listar-tarefa-nao-concluida';
import CadastrarTarefas from './components/cadastrar-tarefa';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listar">Listar Tarefas</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/concluidas">Listar Tarefas Concluidas</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/naoconcluidas">Listar Tarefas Não Concluidas</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/cadastrar">Cadastrar Tarefas</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ListarTarefas />} />
          <Route path="/pages/tarefa/listar" element={<ListarTarefas />} />
          <Route path="/pages/tarefa/concluidas" element={<ListarTarefasConcluidas />} />
          <Route path="/pages/tarefa/naoconcluidas" element={<ListarTarefasNaoConcluidas />} />
          <Route path="/pages/tarefa/cadastrar" element={<CadastrarTarefas />} />
        </Routes>

        <footer>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;