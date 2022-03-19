import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div className='footerCopyright'>
            <span>
                স্বত্ব © ২০২২ প্রথম আলো
            </span>
        </div>
        <div style={{padding: "0.8rem"}}>|</div>
        <div className='footerEditor'>
            <span>
                সম্পাদক ও প্রকাশক: মতিউর রহমান
            </span>    
        </div>
    </footer>
  )
}

export default Footer