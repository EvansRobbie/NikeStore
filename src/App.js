import './App.css';
import {Navbar, Hero, Sales, Description, Stories, Footer, Cart} from './components'
import {heroapi, popularsales, topratesales, highlight, sneaker, story, footerAPI} from './data/data'
function App() {
  return (
    <>
    <Navbar/>
    <Cart/>
    <div className='flex flex-col gap-16 md:gap-20 relative'>
     <Hero heroapi = {heroapi} />
     <Sales endpoint= {popularsales} ifExist />
     <Description endpoint = {highlight} ifExist/>
     <Sales endpoint = {topratesales}  />
     <Description endpoint = {sneaker}/>
     <Stories story = {story}/>
    </div>
    <Footer footerAPI = {footerAPI}/>
    </>
  );
}

export default App;
