
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
        <p>
            <span>News</span>
            <Gallery className="news" data={NewsSliderdata}/>
        </p>
        <p>
            Sales and Deals
            <Gallery data={SalesData}/>
        </p>
        <p>
            New Releases
            <Gallery data={NewReleasesData}/>
        </p>
        <p>
            Coming Soon
            <Gallery data={ComingSoonData} />
        </p>
        <p>
            Most Popular
            <Gallery data={MostPopularData} />
        </p>
        
    </div>
    );
}

export default BodyNews;