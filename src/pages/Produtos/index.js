import { useParams } from "react-router-dom";

function Produtos() {
  const { id } = useParams();

  return (
    <div>
      <h1>Temos esses produtos</h1>
      <h2>Meu produto é: {id}</h2>
    </div>
  );
}

export default Produtos;
