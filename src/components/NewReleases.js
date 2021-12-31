

function NewReleases(props){ /**/ 
    const{ item } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div>
            <img src={item.image} onDragStart={handleDragStart} role="presentation" />
            <h4>{item.title}</h4> 
        </div>
    );
}

export default NewReleases;