import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {


const {getTotalCartAmount,token,items_list,cartItems,url} = useContext(StoreContext)

const [data,setData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  city:"",
  street:"",
  number:"",
  phone:""
})

const onChangeHandler = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
}

const placeholder = async (event) => {
  event.preventDefault();
  let orderItems = [];
  items_list.map((item)=>{
    if (cartItems[item._id]>0) {
      let itemInfo = item;
      itemInfo["quantity"] = cartItems[item._id];
      orderItems.push(itemInfo)
    }
  })
  let orderData = {
    address:data,
    items:orderItems,
    amount:getTotalCartAmount()+5,
  }  
  let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
  if (response.data.success) {
    const {session_url} = response.data;
    window.location.replace(session_url);
  }
  else {
    alert("Error")
  }
} 

const navigate = useNavigate();

useEffect(()=> {
  if (!token) {
    navigate('/cart')
  }
  else if(getTotalCartAmount()===0)
  {
    navigate('/cart')
  }
},[token])
console.log("Stored Token:", localStorage.getItem("token"));




  return (
    <form onSubmit={placeholder} className='place-order'>
      <div className='place-order-left'>
        <p className='title'>მიწოდების ინფორმაცია</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='სახელი' />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='გვარი' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='მეილი' />
        <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='ქალაქი' />
        <div className="multi-fields">
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='ქუჩა' />
          {/* <input type="text" placeholder='რეგიონი' /> */}
        </div>
        <div className="multi-fields">
          <input required name='number' onChange={onChangeHandler} value={data.number} type="text" placeholder='კორ./ბინა' />
          {/* <input type="text" placeholder='ქვეყანა' /> */}
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='ტელ.ნომერი' />
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
          <button type='submit'>გადახდა</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
