
function MostPopular(props){ /**/ 
    const{ most } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div>
            <img src={most.image} onDragStart={handleDragStart} role="presentation" />
            {/* <h4>{game.title}</h4> */}
        </div>
    );
}

export default MostPopular;