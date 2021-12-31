import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './test.css'
import '../components/News.css'
import {MdArrowForwardIos,MdOutlineArrowBackIosNew } from 'react-icons/md';


import NewsSliderdata from '../data/NewsSliderData'
import NewsItems from './NewsItems';

import NewReleasesData from '../data/NewReleasesData'
import NewReleases from './NewReleases';

import ComingSoonData from '../data/ComingSoonData';
import ComingSoon from './ComingSoon'

import SalesData from '../data/SalesData';
import Sales from './Sales';

import MostPopularData from '../data/MostPopularData';
import MostPopular from './MostPopular';


const Gallery = ({data}) => {

    const responsive = {
        0: { items: 1 },
        568: { items:  3},
        1024: { items: 3 },
    };

    const createItems = (length, [handleClick]) => {
        let deltaX = 0;
        let difference = 0;
        const swipeDelta = 20;
      
        return Array.from({ length }).map((item, i) => (
            <div
                data-value={i + 1}
                className="item"
                onMouseDown={(e) => (deltaX = e.pageX)}
                onMouseUp={(e) => (difference = Math.abs(e.pageX - deltaX))}
                onClick={() => (difference < swipeDelta) && handleClick(i)}
            >
                <span className="item-inner" />
            </div>
        ));
    };
  
    

    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems(5, [setActiveIndex]));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    if(data === NewsSliderdata){
        const itemsm = data.map((game, index) =>{
            return <NewsItems key={index} news={game} />;
        });    
        const responsiveforNews = {
            0: { items: 1 },
            568: { items:  1},
            1024: { items: 3 },
        };
        return [
            <div className="b-refs-buttons">
                <button className="prev-but" onClick={slidePrev}>
                    <MdOutlineArrowBackIosNew />
                </button>
                <button className="next-but" onClick={slideNext}>
                    <MdArrowForwardIos />
                </button>
            </div>,
            <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={itemsm}
                activeIndex={activeIndex}
                responsive={responsiveforNews}
                onSlideChanged={syncActiveIndex}
            />
            
        ];
    }
    
    
    if(data === NewReleasesData){
        const itemsm = data.map((game, index) =>{
            return <NewReleases key={index} item={game} />;
        });
     
        return [
            <div className="b-refs-buttons">
            <button className="prev-but" onClick={slidePrev}>
                <MdOutlineArrowBackIosNew />
            </button>
            <button className="next-but" onClick={slideNext}>
                <MdArrowForwardIos />
            </button>
            </div>,
            <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={itemsm}
                activeIndex={activeIndex}
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
            />
        ];
    }

    if(data === ComingSoonData){
        const itemsm = data.map((game, index) =>{
            return <ComingSoon key={index} coming={game} />;
        });
        
        return [
            <div className="b-refs-buttons">
                <button className="prev-but" onClick={slidePrev}>
                    <MdOutlineArrowBackIosNew />
                </button>
                <button className="next-but" onClick={slideNext}>
                    <MdArrowForwardIos />
                </button>
            </div>,
            <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={itemsm}
                activeIndex={activeIndex}
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
            />
        ];
    }

      
    if(data === SalesData){
        const itemsm = data.map((game, index) =>{
            return <Sales key={index} sales={game} />;
        });
        
        return [
            <div className="b-refs-buttons">
                <button className="prev-but" onClick={slidePrev}>
                    <MdOutlineArrowBackIosNew />
                </button>
                <button className="next-but" onClick={slideNext}>
                    <MdArrowForwardIos />
                </button>
            </div>,
            <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={itemsm}
                activeIndex={activeIndex}
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
            />
        ];
    }
 
        
    if(data === MostPopularData){
        const itemsm = data.map((game, index) =>{
            return <MostPopular key={index} most={game} />;
        });
        
        return [
            <div className="b-refs-buttons">
                <button className="prev-but" onClick={slidePrev}>
                    <MdOutlineArrowBackIosNew />
                </button>
                <button className="next-but" onClick={slideNext}>
                    <MdArrowForwardIos />
                </button>
            </div>,
            <AliceCarousel
                mouseTracking
                disableDotsControls
                disableButtonsControls
                items={itemsm}
                activeIndex={activeIndex}
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
            />
        ];
    }
}
export default Gallery;