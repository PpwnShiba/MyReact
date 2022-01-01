
import './News.css'
import Gallery from './Slider';
import NewsSliderdata from '../data/NewsSliderData'
import NewReleasesData from '../data/NewReleasesData'
import ComingSoonData from '../data/ComingSoonData'
import SalesData from '../data/SalesData';
import MostPopularData from '../data/MostPopularData';

function BodyNews(){
  
    return(
    <div>
        <div>

            <Gallery className="news" data={NewsSliderdata}/>
        </div>
        <div>
           
            <Gallery data={SalesData}/>
        </div>
        <div>
          
            <Gallery data={NewReleasesData}/>
        </div>
        <div>
            
            <Gallery data={ComingSoonData} />
        </div>
        <div>
            
            <Gallery data={MostPopularData} />
        </div>
        
    </div>
    );
}

export default BodyNews;