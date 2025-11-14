import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tarefa from "../models/tarefa";

function ListarTarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    fetch("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  function alterar(id: string) {
    console.log(`Id: ${id}`);
    axios
      .put(`http://localhost:5000/api/tarefas/alterar/{id}`)
      .then((resposta) => {
        console.log(resposta.data);
        setTarefas(resposta.data);
      });
  }

  return (
    <div>
      <h1>Listar Tarefas</h1>

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
              <td>
                <button
                  onClick={() => {
                    alterar(tarefa.tarefaId!);
                  }}
                >
                  Alterar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefas;