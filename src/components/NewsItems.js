
import './Body.css';
function NewsItems(props){ /**/ 
    const{ news } = props;
    const handleDragStart = (e) => e.preventDefault();
    return(
        <div className="news">
            <img src={news.image} onDragStart={handleDragStart} role="presentation" />
            <h6>{news.title}</h6>
            <h6>{news.date}</h6>
        </div>
    );
}

export default NewsItems;