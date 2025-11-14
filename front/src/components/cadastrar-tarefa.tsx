import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastrarTarefas() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");

  function cadastrarTarefa(e: React.FormEvent) {
    e.preventDefault();

    const tarefa = {
      titulo,
    };

    axios
      .post("http://localhost:5000/api/tarefas/cadastrar", tarefa)
      .then((resposta) => {
        console.log("Tarefa cadastrada:", resposta.data);
        alert("Tarefa cadastrada com sucesso!");
      });
  }

  return (
    <div>
      <h1>Cadastrar Tarefa</h1>

      <form onSubmit={cadastrarTarefa}>
        <label>Titulo:</label>
        <input
          type="text"
          placeholder="Digite o titulo"
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <br />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarTarefas;