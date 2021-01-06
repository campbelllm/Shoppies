import './App.css';
import Search from './Componenets/Search';
import Results from './Componenets/Results';
import Nomination from './Componenets/Nominations';

function App() {
  return (
    <div>
      <header className="title">
        <h1>
          The Shoppies
        </h1>
      </header>
      <hr></hr>
      <Search/>
      <Results/>
      <Nomination/>
    </div>
  );
}

export default App;
