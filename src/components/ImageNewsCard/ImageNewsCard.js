import React from 'react'
import './ImageNewsCard.css'

function ImageNewsCard({news}) {
  return (
    <div className='imageNewsContainer'>
      <div className='content'>
      <h3>
        <a href='#'>
          {news.title}
        </a>
      </h3>
      </div>
      <div className='imageContainer'>
        <a href='#'>
          <img alt={news.title} src={news.photo}/>

        </a>
      </div>
    </div>
  )
}

export default ImageNewsCard