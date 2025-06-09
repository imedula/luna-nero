import React from 'react'
import './ExploreMenu.css'
import { items_list, menu_list } from '../../assets/assets'


const ExploreMenu = ({category,setCategory}) => {
  console.log(menu_list)
  return (
    <div className='explore-menu' id='explore-menu'>
     <h1>შეაბიჯე სიბნელის მაგიურ ლაბირინთში</h1> 
     <p className='explore-menu-text'>🔮 Luna Nero – 12 გზა მისტიკური ძალისკენ! 🔮

ეძებ ენერგეტიკულ დაცვას, სულიერ გაღვიძებას ან მაგიურ ძალას?
Luna Nero-ში დაგხვდება 12 უნიკალური კატეგორია – თილისმები, ტაროს კარტები, სანთლები, ეთერზეთები, მცენარეები, მისტიკური აქსესუარები და სხვა მრავალი!

🔥 შეიგრძენი მაგიის ძალა!
✨ იპოვე ის, რაც ყველაზე მეტად გჭირდება!
🔮 Luna Nero – მაგია შენს ხელშია!</p>
     <div className="explore-menu-list">
      {menu_list.map((item,index)=>{
        console.log(item.menu_name);
        return (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        )
      })}
     </div>
     <hr />
    </div>
  )
}

export default ExploreMenu
