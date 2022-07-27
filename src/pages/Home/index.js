import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Seja bem vindo a página Home!</h1>
      <Link to="/produtos/123">Acessar página 123</Link>
    </div>
  );
}

export default Home;
