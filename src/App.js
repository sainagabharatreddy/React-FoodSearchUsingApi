import { BsSearch } from "react-icons/bs";
import "./index.css";
import { useState } from "react";
import  Products from"./product.js";
const img1 = "data:image/png;base64,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";

const App = ()=>{

   const [search , setSearch]=useState("");
   const [data , setData] = useState([]);

   const SubmitHandler = e =>{

    const YOUR_APP_ID='36e3ba72';
    const YOUR_APP_KEY='094bfb63ba89410c183091a109336ef1';
    e.preventDefault();
    console.log(search);

    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(

      response => response.json()

  ).then( 
    data => setData(data.hits));

   }
   




return(
  <>
   <div className="conatainer">
    
   
       <div className="navbar"> 
              <span className="logo">
              <img src={img1} alt="logo"></img>
              </span>
              <h3 className="heading">Search  Food Recipies</h3>
              <span className="links">
              <ul className="nav-links" >
              <li><a href="#">Home</a></li>
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#Login">Login</a></li>
              </ul>
              </span>
       </div>
     
     <div className="content">
     
     <form onSubmit={SubmitHandler}>
      <input type='text' placeholder='Enter Recipe Name...' onChange={(e)=>setSearch(e.target.value)}  value={search} className="search" ></input>
      <input type = "submit" class="btn btn-primary" value="submit"></input>

     </form>
     </div>

    
   </div>
   <div className="products">
   {data.length > 0 && <Products data={data} />}
   </div>


  </>
);
} 
  


export default App;
