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

  return (
    <div className='gridContainer'>
        <div className='newsContainer'>
            <div className='firstRow'>
                <div className='leadStoryContainer'>
                    <LeadStory key={leadStory.id} news={leadStory}/>
                </div>
                <div className='secondStoryContainer'>
                    <NewsCard/>
                </div>
            </div>
            <div className='secondRow'>
                <div className='storiesContainer'>
                    <NewsCard/>
                </div>
                <div className='storiesContainer'></div>
                <div className='storiesContainer'></div>
            </div>
            <div className='thirdRow'>
                <div className='storiesWithImageContainer'>
                    <ImageNewsCard/>
                </div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
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
                <ImageNewsCard/>
            </div>
            <div className='ePaperLink'>
                <Epaper/>
            </div>
        </div>
    </div>
  )
}

export default NewsContainer