import axios from 'axios'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import './PokemonDetails.css';
function PokemonDetails(){
const {id}= useParams();
const [pokemons,SetPokemonDetails]=useState({});
async function DownloadedPokemonDetails(){
const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
console.log(response.data);
SetPokemonDetails({
    name:response.data.name,
    image:response.data.sprites.other.dream_world.front_default,
    types:response.data.types.map((t)=>t.type.name),
    moves:response.data.moves.map((t)=>t.move.name),
    height:response.data.height,
    base_experience:response.data.base_experience    ,
    weight:response.data.weight,
    species:response.data.species.name,
    order:response.data.order,





})
}
useEffect(()=>{
    DownloadedPokemonDetails();
},[])
return(
    <>
    <div className='pokemon-details-wrapper'>
      
   <img  className ='pokemon-details-image'src={pokemons.image} />
   <div className='pokemon-details-name'>  <span>{pokemons.name}</span></div>
   <div className='PokemonHeight'>height:{pokemons.height}</div>
        <div className=''>weight:{pokemons.weight}</div>
        <div className=''>species:{pokemons.species}</div>
        <div >base_experience:{pokemons.base_experience}</div>
        <div > order: { pokemons.order}</div>

        <div className='pokemon-details-types'> types: { pokemons.types && pokemons.types.map((t)=><div key={t}>{t}</div>)}
        </div>
        

    </div>
    </>
)
}
export default PokemonDetails;