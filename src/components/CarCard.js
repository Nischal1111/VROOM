import React from 'react'
import "../css/carcard.css"
import { Carlist } from '../Datas'

const CarCard = () => {
  return (
    <div className='carcard'>
      {Carlist.map((cars,index)=>{
        const {title, img, price,Model,Mode,Rating} = cars;
        return(<>
            <div key={index} className="card">
                <img src={img} alt={title} className='car-img-card'></img>
                <div className="car-detail">
                <h2 className="car-name" >{title}</h2>
                </div>
                <p>{price}</p>
            </div>
        </>)
      })}
    </div>
  )
}

export default CarCard
