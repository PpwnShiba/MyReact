

function NewsItems(props){ /**/ 
    const{ news } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div className="news">
            <img src={news.image} onDragStart={handleDragStart} role="presentation" />
            <h5>{news.title}</h5>
            <h6>{news.date}</h6>
        </div>
    );
}

export default NewsItems;