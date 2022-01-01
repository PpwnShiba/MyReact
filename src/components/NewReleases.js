import './Body.css'
import {AiFillStar } from 'react-icons/ai';
function NewReleases(props){ /**/ 
    const{ item } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div className='item'>
            <img src={item.image} onDragStart={handleDragStart} role="presentation" />
            <h5>{item.title}</h5> 
            <h6>{item.cost}</h6> 
            <span className='firststar'><AiFillStar/></span>
            <span><AiFillStar/></span>
            <span><AiFillStar/></span>
            <span><AiFillStar/></span>
        </div>
    );
}

export default NewReleases;