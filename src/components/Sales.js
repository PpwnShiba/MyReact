

function Sales(props){ /**/ 
    const{ sales } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div>
            <img src={sales.image} onDragStart={handleDragStart} role="presentation" />
            <h4>{sales.title}</h4>
        </div>
    );
}

export default Sales;