import './App.css';
import {Hero, Sales, Description} from './components'
import {heroapi, popularsales, topratesales, highlight, sneaker} from './data/data'
function App() {
  return (
    <div className='flex flex-col gap-16 md:gap-20 relative'>
     <Hero heroapi = {heroapi} />
     <Sales endpoint= {popularsales} ifExist />
     <Description endpoint = {highlight} ifExist/>
     <Sales endpoint = {topratesales}  />
     <Description endpoint = {sneaker}/>
    </div>
  );
}

export default App;
