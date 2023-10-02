import React from 'react'

function Navbar() {
  return (
    <nav className='Navbar'>
        <img src="./Airbnb_Header.png"className="NavbarImage"/>
        <h1 className='Navbarh1'> Welcome, good {timeoftheday}!</h1>
    </nav>
  )
}

const date = new Date()
const hours = date.getHours()
let timeoftheday

if (hours < 13) {
  timeoftheday = "morning"
}
else if (hours >=13 && hours <20){
  timeoftheday = "afternoon"
}
else {
  timeoftheday = "night"
}

export default Navbar