import './Body.css'
function ComingSoon(props){ /**/ 
    const{ coming } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div className='coming'>
            <img src={coming.image} onDragStart={handleDragStart} role="presentation" />
            <h5>{coming.title}</h5>
            <h6>{coming.date}</h6>
        </div>
    );
}

export default ComingSoon;