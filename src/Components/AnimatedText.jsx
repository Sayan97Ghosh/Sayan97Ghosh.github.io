import React from 'react'
import "./home.css"
function AnimatedText() {
  return (
    <div class="hidden lg:flex">
        <div class="wrapper">
    <div class="static-txt" >I'm </div>
    <ul class="dynamic-txts">
      <li><span>Sayan Ghosh</span></li>
      
      <li><span>A Designer</span></li>
      <li><span>A Developer</span></li>
     
    </ul>
  </div>
    </div>
  )
}

export default AnimatedText
