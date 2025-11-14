import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tarefa from "../models/tarefa";

function ListarTarefasConcluidas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {

    fetch("http://localhost:5000/api/tarefas/concluidas")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  return (
    <div>
      <h1>Listar Tarefas Concluidas</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Criado em</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.criadoEm}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefasConcluidas;