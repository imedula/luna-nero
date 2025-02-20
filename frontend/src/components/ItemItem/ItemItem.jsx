import React, { useState } from 'react'
import './ItemItem.css'

const ItemItem = ({id, name, price, description, image}) => {
  const [rating, setRating] = useState(0)  // State to manage rating

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div className='item-item'>
      <div className="item-item-img-container">
        <img className='item-item-image' src={image} alt="" />
      </div>
      <div className='item-item-info'>
        <div className="item-item-name-rating">
          <p>{name}</p>
          <div className="item-rating">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1
              return (
                <span
                  key={index}
                  className={`star ${ratingValue <= rating ? "active" : ""}`}
                  onClick={() => handleRating(ratingValue)}
                >
                  ★
                </span>
              )
            })}
          </div>
        </div>
        <p className="item-item-desc">{description}</p>
        <p className="item-item-price">₾{price}</p>
      </div>
    </div>
  )
}
export default ItemItem
