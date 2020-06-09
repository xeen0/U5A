import React from 'react';
import './card.css'
const  CardComponent = ({name , price , img}) =>  {

  return (
    <>
    <div className="box">
    <div class="glass">
      <div className="content">
          <div className="img_box">
          <img src={img}/>
          </div>
          <div className="details">
            <h2>{name}</h2>
            <br/>
                    <span style={{color:'yellow'}}>{price}/- per month</span>
                    <p style={{color:'white'}}>Date to Date counts</p>

          </div>
      </div>
    </div>
    </div>
   
      </>
  );
}

export default CardComponent