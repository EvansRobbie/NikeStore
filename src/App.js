import './App.css';
import {Hero} from './components'
import {heroapi} from './data/data'
function App() {
  return (
    <div>
     <Hero heroapi = {heroapi}/>
    </div>
  );
}

export default App;
