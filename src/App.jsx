import './App.css'
import CustomRouter from './Router/CustomRouter'
import {Link} from 'react-router-dom'
function App() {


  return (
 
    <div >
     <h1 id='pokedox-heading'>
   <Link to={'/'} id='link'>Pokedex</Link> 
   </h1>
    <CustomRouter/>
    </div>
 
  )
}

export default App
