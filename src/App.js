import './App.css';
import Search from './Componenets/Search';
import Results from './Componenets/Results';
import Nomination from './Componenets/Nominations';

function App() {
  return (
    <div>
      <header>
        <h1>
          The Shoppies
        </h1>
      </header>
      <Search/>
      <Results/>
      <Nomination/>
    </div>
  );
}

export default App;