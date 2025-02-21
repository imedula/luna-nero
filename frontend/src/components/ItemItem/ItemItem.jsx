import React, { useContext, useState } from 'react'
import './ItemItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ItemItem = ({id, name, price, description, image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);


  const [rating, setRating] = useState(0)  // State to manage rating

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div className='item-item'>
      <div className="item-item-img-container">
        <img className='item-item-image' src={image} alt="" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
            :<div className='item-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
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
        <p className="item-item-price">₾ {price}</p>
      </div>
    </div>
  )
}
export default ItemItem
// 1:41