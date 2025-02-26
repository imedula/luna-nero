import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {

  const { cartItems, items_list, removeFromCart } = useContext(StoreContext)


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>ნივთები</p>
          <p>დასახელება</p>
          <p>ფასი</p>
          <p>რაოდენობა</p>
          <p>სულ</p>
          <p>ამოშლა</p>
        </div>
        <br />
        <hr />
        {items_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₾{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₾{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>

            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart
