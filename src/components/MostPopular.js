import './Body.css'
import {AiFillStar } from 'react-icons/ai';
function MostPopular(props){ /**/ 
    const{ most } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div className="most">
            <img src={most.image} onDragStart={handleDragStart} role="presentation" />
            <h5>{most.title}</h5>
            <h6>{most.cost}</h6>
            <span className='firststar'><AiFillStar/></span>
            <span><AiFillStar/></span>
            <span><AiFillStar/></span>
            <span><AiFillStar/></span>
        </div>
    );
}

export default MostPopular;