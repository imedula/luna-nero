// import React, { useContext } from 'react'
// import './ItemDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import ItemItem from '../ItemItem/ItemItem'

// const ItemDisplay = ({category}) => {

//   const {items_list} = useContext(StoreContext)

//   return (
//     <div className='item-display' id='item-display'>
//       <h2>ჩვენთან ნახავთ... </h2>
//       <div className="item-display-list">
//         {items_list.map((item,index)=>{
//           if (category==="All" || category===item.category) {
//              return <ItemItem
//               key={index} 
//              id={item._id} 
//              name={item.name} 
//              description={item.description} 
//              price={item.price} 
//              image={item.image} />
//             }
//         })}
//       </div>
      
//     </div>
//   )
// }


// export default ItemDisplay





import React, { useContext, useEffect } from 'react';
import './ItemDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import ItemItem from '../ItemItem/ItemItem';

// Translation map for categories
const categoryTranslationMap = {
  "All": "All",
  "სანთელი": "candle", 
  "ქანდაკება": "sculpture",
  "ლიტერატურა": "literature",
  "ქვები და კრისტალები": "stones and crystals",
  "ეთერზეთები": "essential oils",
  "მცენარეები": "plants",
  "თილისმები და ამულეტები": "talismans and amulets",
  "ტარო და ორაკულები": "tarot and oracles",
  "ეზოთერიკული ნივთები": "esoteric items",
  "მისტიკური აქსესუარები": "mystical accessories",
  "ფენშუი ნივთები": "fengshui items",
  "სურნელოვანი ჩხირები": "incense sticks"
};

const ItemDisplay = ({ category }) => {
  const { items_list } = useContext(StoreContext);

  console.log("Items list:", items_list);

  // Translate the category to the English equivalent (if any)
  const categoryInEnglish = categoryTranslationMap[category] || category;

  useEffect(() => {
    console.log("Selected category:", category);
    console.log("Translated category:", categoryInEnglish);
  }, [category]);

  return (
    <div className='item-display' id='item-display'>
      <h2>ჩვენთან ნახავთ... </h2>
      <div className="item-display-list">
        {items_list.length > 0 ? (
          items_list.map((item) => {

            const itemCategoryNormalized = (item.category || "").trim().toLowerCase();
            const categoryNormalized = categoryInEnglish.trim().toLowerCase();

            console.log("Normalized item category:", itemCategoryNormalized);
            console.log("Normalized selected category:", categoryNormalized);

            // Display item if category matches or "All" is selected
            if (categoryNormalized === "all" || itemCategoryNormalized === categoryNormalized) {
              return (
                <ItemItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null; 
          })
        ) : (
          <p>პროდუქცია არ არის ხელმისაწვდომი</p>
        )}
      </div>
    </div>
  );
};

export default ItemDisplay;
