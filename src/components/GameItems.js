import './Body.css';

function GameItems(props){ /**/ 
    const{ game } = props;
    return(
        <div>
            <img src={game.image}/>
            {/* <h4>{game.title}</h4> */}
        </div>
    );
}

export default GameItems;