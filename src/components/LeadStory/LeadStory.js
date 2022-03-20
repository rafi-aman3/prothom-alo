import React from 'react'

function LeadStory({news}) {
  return (
    <>
    <div className='leadStoryContent'>
      <h1>
        <a href='#'>
          {news.title}
        </a>
      </h1>
      <p>
        <a href='#'>
          {`${(news.description).substr(0,80) + '...'}`}
        </a>
      </p>
    </div>
    <div className='leadStoryImage'>
      <a href='#'>
        <img style={{ height: 200}} alt={news.title} src={news.photo}/>
      </a>
    </div>
    </>

  )
}

export default LeadStory