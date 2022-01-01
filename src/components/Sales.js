import './Body.css';
import {AiFillStar } from 'react-icons/ai';
function Sales(props){ /**/ 
    const{ sales } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        
        <div className="sales">
            
            <img src={sales.image} onDragStart={handleDragStart} role="presentation" />
            <h5>{sales.title}</h5>
            <h6>{sales.cost}</h6>
            <span className='firststar'><AiFillStar/></span>
            <span><AiFillStar/></span>
            <span><AiFillStar/></span>
            <span><AiFillStar/></span>
        </div>
    );
}

export default Sales;