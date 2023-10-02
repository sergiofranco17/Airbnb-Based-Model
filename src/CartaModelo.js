import React from 'react'

function CartaModelo(props) {
  return (
    <div className='Card'>
      <img src={props.img} className='Card--image'/>
      <div className='Stats'>
        <img src="./star.png" className="Star"/>
        <p>{props.stats1} <span className='Stats-grey'>{props.stats2} - {props.place}</span></p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <p> <span className='bold'>{props.price}</span> / person</p>
      </div>
    </div>
  )
}

export default CartaModelo