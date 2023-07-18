import React from 'react';
import "./index.css";

const product = ({data}) => {
  return (
    <div>
        <div className="row">
        { data.map(data => (

           

                <div className="class" >
            
                <div class="card" style={{width: "19rem" }}>
                <img src={data.recipe.image}  class="card-img-top" alt='not rendered'></img>
                <div class="card-body">
                    <h5 class="card-title">{data.recipe.label}</h5>
                   
                    <button class="btn btn-primary">watch video</button>
                </div>
                </div>      

              
           
                 </div>
            

            ))}

        </div>



    </div>
  )
}

export default product