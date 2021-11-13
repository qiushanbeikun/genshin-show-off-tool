import './App.css';
import {Navbar} from "./components/Navbar";
import {Workshop} from "./containers/workshop/MainArea";


function App() {
  return (
    <div>
        <Navbar/>
        <Workshop/>
    </div>
  );
}

export default App;
