import { useEffect } from "react";
import axios from 'axios';
import './pockemonList.css'
import { useState } from "react";
import PokemonNew from "../Pokemon/Pokemon";

function PokemonList() {
    const [Pockemon, SetPokemonList] = useState([]);
    const [isloading, SetisLoading] = useState(true);
    const[pokedoxUrl,Setpokedex_url]=useState('https://pokeapi.co/api/v2/pokemon/');
    const[nextUrl,SetNextUrl]=useState();
    const[PrevUrl,SetPrevUrl]=useState();
    
    async function PockemonList() {
        SetisLoading(true);
        const response = await axios.get(pokedoxUrl);  // this is used for download list of 20 pokemon
             console.log(response.data);
        SetNextUrl(response.data.next);
        SetPrevUrl(response.data.previous);
        const POkenmonResult = response.data.results; // we get the array of pokemon from the results.....
        //    console.log(POkenmonResult);

        // iterating over the array of pokemon and using their url , to create an array of promises .that will download the 20 pokemon
        const PokenmonresultPromises = POkenmonResult.map((Pokemon) => axios.get(Pokemon.url));
        //  console.log(PokenmonresultPromises);

        // now passing tthe promises to the axios .all
        const PokemonResultPromiseData = await axios.all(PokenmonresultPromises);
        console.log(PokemonResultPromiseData);

        //nbow iterate on data of eaxch pokemon and extract their name,id,image and types
        const res = PokemonResultPromiseData.map((Poke) => {
            const pokemon = Poke.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                Types: pokemon.types

            }
        })
        console.log(res);
        SetPokemonList(res);
        
        SetisLoading(false);
    }

    useEffect(() => {
        PockemonList();
    }, [pokedoxUrl]);
    return (
        // is loading condition is written to check the data is downloaded or not.if it downloaded then it shows their iamges on the screen ..

        <div className="Pockemon-wrapper-List">
            Pockemon List

            <div className="pokemon-wrapper">
            {(isloading) ? 'loading....' :
                Pockemon.map((p) => <PokemonNew name={p.name} image={p.image} key={p.id} id={p.id} />)
            }
            </div>
            <div className="controls">
              <button disabled={PrevUrl===null} onClick={()=>Setpokedex_url(PrevUrl)}>Prev</button>
              <button disabled={nextUrl===null} onClick={()=>Setpokedex_url(nextUrl)}>Next</button>
            </div>
        </div>
    )
}
export default PokemonList;