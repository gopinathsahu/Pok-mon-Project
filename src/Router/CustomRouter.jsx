import {Routes ,Route } from 'react-router-dom'

import PokemonDetails from '../Component/PokemonDetails/PokemonDetails';


import Pokedex from '../Component/Pokedex/Pokedex';
const CustomRouter=()=>{
return(
    <>
          <Routes>
            <Route  path='/' element={<Pokedex/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetails/>}/>;

           
            
            </Routes>     
    </>
)

}
export default CustomRouter;