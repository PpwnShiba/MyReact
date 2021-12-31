function ComingSoon(props){ /**/ 
    const{ coming } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div>
            <img src={coming.image} onDragStart={handleDragStart} role="presentation" />
            <h4>{coming.title}</h4>
            <h6>{coming.date}</h6>
        </div>
    );
}

export default ComingSoon;