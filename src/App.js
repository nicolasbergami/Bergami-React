import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { ItemListContainer } from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <NavBar/>
    <div>
    <ItemListContainer/>
    </div>
    
  </div>

  );
}

export default App;
