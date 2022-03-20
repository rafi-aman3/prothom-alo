import React from 'react'

function NewsCard({news}) {  
  return (
    <div>
      <h3>
        <a href='#'>
          {news.title}
        </a>
      </h3>
      <p>
        <a href='#'>
          {(news.description).substr(0,80) + "..."}
        </a>
      </p>
    </div>
  )
}

export default NewsCard