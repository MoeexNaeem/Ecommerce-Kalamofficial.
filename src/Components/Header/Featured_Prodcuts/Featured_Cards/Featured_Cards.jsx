/* eslint-disable no-unused-vars */
import React from 'react'
import Data from '../../../Data/Data';
import Cards from '../../../Shop/Cards';

const Featured_Cards = () => {

    const threeCardsData = Data.slice(0, 3);

  return (
    <>
          <div className='container' style={{paddingRight:"4rem"}}>
            <div style={{ marginTop: "1.3rem" }}>
              <div className="card-container">
                {threeCardsData.map((item, index) => (
                  <Cards
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    offprice={item.offprice}
                    stars={item.stars}
                    item={item}
                  />
                ))}
              </div>
            </div>
          </div>
    </>
  )
}

export default Featured_Cards
