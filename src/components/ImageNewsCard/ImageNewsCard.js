import React from 'react'

function ImageNewsCard({news}) {
  return (
    <div>
      <h3>
        <a href='#'>
          {news.title}
        </a>
      </h3>
      <p>
        <a href='#'>
          {(news.description).substr(0,30) + "..."}
        </a>
      </p>
    </div>
  )
}

export default ImageNewsCard