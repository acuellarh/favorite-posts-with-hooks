import './App.css';

function App() {
  return (
    <div className="container">

      <div className="row mt-4 mb-3">
        <div className="col">
          <h1 className="text-center">Blog pots populares</h1>
        </div>       
      </div>

      <div className="row mt-4 mb-3">
        <div className="col">
          <p className="d-inline-block ms-2">Orden:</p>       
          <button type="button" className="btn btn-outline-primary ms-2">Ascendente</button>
          <button type="button" className="btn btn-primary ms-2">Descendente</button>          
        </div>      
      </div>

    </div>
  );
}

export default App;
