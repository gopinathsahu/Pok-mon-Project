
import {Link} from 'react-router-dom'
import './Pokemon.css';
function pokemon({ name, image ,id}) {
    return (

        <div className="pokemon ">

  <Link to={`/pokemon/${id} `} className='Link'>
  <div className="pokemon-name">{name}</div>
            <div><img className="pokemon-image" src={image} /></div>
  </Link>
        </div>
    )
}
export default pokemon;