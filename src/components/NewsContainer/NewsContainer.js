import React, { useEffect, useState } from 'react'
import newsData from '../../data/data.json'; 
import LeadStory from '../LeadStory/LeadStory';
import NewsCard from '../NewsCard/NewsCard';
import './NewsContainer.css'

function NewsContainer() {
    

  return (
    <div className='gridContainer'>
        <div className='newsContainer'>
            <div className='firstRow'>
                <div className='leadStoryContainer'></div>
                <div className='secondStoryContainer'></div>
            </div>
            <div className='secondRow'>
                <div className='storiesContainer'></div>
                <div className='storiesContainer'></div>
                <div className='storiesContainer'></div>
            </div>
            <div className='thirdRow'>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
                <div className='storiesWithImageContainer'></div>
            </div>
        </div>
        <div className='sideContainer'>
            <div className='adContainer'></div>
            <div className='sideNewsContainer'></div>
            <div className='storiesWithImageContainer'></div>
            <div className='ePaperLink'></div>
        </div>
    </div>
  )
}

export default NewsContainer