
//import { ethers } from 'ethers';
//import Lock from './artifacts/contracts/Lock.sol/Lock.json';
import './xss/App.css';
import { Navbar, Portada } from './componentes/componentes_all.js';


//const LockAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';


const App = () => {
  


  return (
    <div className="App">

       <Navbar />
       <Portada />
      
    </div>
  );
}

export default App;
