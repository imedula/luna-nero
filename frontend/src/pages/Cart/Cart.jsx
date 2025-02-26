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
              <div key={item._id}>   {/* Add key here */}
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₾{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₾{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detalis">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <p>მიტანის საფასური</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <b>სულ</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
