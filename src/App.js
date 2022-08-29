
import './App.css';
import { NavBar } from './Components/NavBar';
import  ItemListContainer  from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <NavBar/>
    <div>
    <ItemListContainer productos={{nombre: 'Bicicleta XRT 2022',img:"https://www.pngmart.com/files/6/Bicycle-PNG-Background-Image.png",categoria:'mountain bike',precio:'75.000'}}/>
    </div>
    
  </div>

  );
}

export default App;
