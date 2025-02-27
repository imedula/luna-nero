import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {


const {getTotalCartAmount} = useContext(StoreContext)


  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>მიწოდების ინფორმაცია</p>
        <div className="multi-fields">
          <input type="text" placeholder='სახელი' />
          <input type="text" placeholder='გვარი' />
        </div>
        <input type="email" placeholder='მეილი' />
        <input type="text" placeholder='ქალაქი' />
        <div className="multi-fields">
          <input type="text" placeholder='ქუჩა' />
          {/* <input type="text" placeholder='რეგიონი' /> */}
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='საფოსტო კოდი' />
          {/* <input type="text" placeholder='ქვეყანა' /> */}
        </div>
        <input type="text" placeholder='ტელ.ნომერი' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>კალათა</h2>
          <div>
            <div className="cart-total-detalis">
              <p>ღირებულება</p>
              <p>₾{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <p>მიტანის საფასური</p>
              <p>₾{getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-total-detalis">
              <b>სულ</b>
              <b>₾{getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
            </div>
          </div>
          <button>გადახდა</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
