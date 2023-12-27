import PockemonList from '../PockemonList/PockemonList'
import Search from '../Search/Search'
import './Pokedox.css'
function Pokedex(){
return(
   <div className="Pokedex-wrapper">

<Search/>
<PockemonList/>
   </div>
)
}
export default Pokedex;