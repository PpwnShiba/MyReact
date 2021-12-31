
import './App.css';
import AppHeader from './components/App-header';
import CoverHome from './components/cover-home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyPage from './components/Body';


function App() { /*แปลงอาเรย์เป็นตัว compement*/ 
  // const GameElements = GameList.map((game, index) =>{
  //   return <GameItems key={index} game={game} />;
  // })
  return (
    <div className="App">
     
      <AppHeader />
      <CoverHome />
      <BodyPage />
    
    </div>
  );
}

export default App;
