import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <h2>Encontramos essas páginas:</h2> <br></br>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/sobre">Sobre</Link>
      <br></br>
      <Link to="/contato">Contato</Link>
      <br></br>
    </div>
  );
}

export default Error;
