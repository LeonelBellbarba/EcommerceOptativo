import logo from './logo.svg';
import './App.css';
import Productos from "./Productos"

function App() {
  return (
    <div className="App">
      <header>
          <div className= "tituloCaja">
            <h1 className="titulo">Mercado Gamer</h1>
          </div>
      </header>

      <Productos/>
    

      <footer>Creado por Leonel Bellabarba</footer>
    </div>
  );
}

export default App;
