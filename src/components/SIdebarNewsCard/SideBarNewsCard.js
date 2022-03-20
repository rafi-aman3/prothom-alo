import React from 'react'

function SideBarNewsCard({news}) {
  return (
    <div style={{padding: 10}}>
      <a href='#'>
      <img style={{width: 300, height: 200}} alt={news.title} src={news.photo}/>
      </a>
      <a href='#'>
      <h4>{news.title}</h4>
      </a>
    </div>
  )
}

export default SideBarNewsCard