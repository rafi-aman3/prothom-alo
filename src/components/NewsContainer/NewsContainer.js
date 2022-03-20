import React, { useEffect, useState } from 'react'
import newsData from '../../data/data.json'; 
import Ad from '../Ad/Ad';
import Epaper from '../Epaper/Epaper';
import ImageNewsCard from '../ImageNewsCard/ImageNewsCard';
import LeadStory from '../LeadStory/LeadStory';
import NewsCard from '../NewsCard/NewsCard';
import SideBarNewsCard from '../SIdebarNewsCard/SideBarNewsCard';
import './NewsContainer.css'

function NewsContainer() {

    const leadStory = newsData.find(obj => {
        return obj.sort === 3;
    });

    const secondStory = newsData.find(obj => {
        return obj.sort === 1;
    });

    const noImageStory = newsData.filter(obj => {
        return obj.sort > 1 && obj.sort < 7 && obj.sort !== 3 && obj.sort !== 5;
    });

    const imageStory = newsData.filter(obj => {
        return obj.sort > 4 && obj.sort < 12 && obj.sort !== 6 ;
    });

    console.log(imageStory);


  return (
    <div className='gridContainer'>
        <div className='newsContainer'>
            <div className='firstRow'>
                <div className='leadStoryContainer'>
                    <LeadStory key={leadStory.id} news={leadStory}/>
                </div>
                <div className='secondStoryContainer'>
                    <NewsCard key={secondStory.id} news={secondStory}/>
                </div>
            </div>
            <div className='secondRow'>
                {
                    noImageStory.map(news => <div key={news.id}>
                        <NewsCard news={news}/>
                    </div>)
                }
            </div>
            <div className='thirdRow'>
                {
                    imageStory.map(news => 
                        <div key={news.id} className='storiesWithImageContainer'>
                            <ImageNewsCard news={news}/>
                        </div>
                    )
                }
            </div>
        </div>
        <div className='sideContainer'>
            <div className='adContainer'>
                <Ad/>
            </div>
            <div className='sideNewsContainer'>
                <SideBarNewsCard/>
            </div>
            <div className='storiesWithImageContainer'>
            </div>
            <div className='ePaperLink'>
                <Epaper/>
            </div>
        </div>
    </div>
  )
}

export default NewsContainer