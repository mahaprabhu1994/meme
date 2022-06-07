import React from "react";
import './DataEntry.css';
import Jokesdata from "./JokesData";


function Form (){

   let[images,setImage] = React.useState({
      topText:"this is the top text -1",
      bottomText: "and this is the bottom text-1",
      url: "interiors1.jpg",
   })



   function RandomImage(){
      let memes1 = Jokesdata.data.memes
      let RandomNumber = Math.floor(Math.random()*(memes1.length));
      let randomObject =memes1[RandomNumber];
      let randomImage=randomObject.url;
      
      setImage(function (prevImage){
         console.log(prevImage);
         return({
            ...prevImage,
            url:randomImage,
            topText:"",
            bottomText:"",
         })
      })
   }

   return (
      <div className="container1" >
         <form className="formfield">
            <div 
            className="box1">
            <input  
            className="fromtext1"
            placeholder="Top Text"
            type="text" >
            </input>
            </div>
            <div 
            className="box1">
            <input  
            className="fromtext1"
            placeholder="Bottom Text"
            type="text" >
            </input>
            </div>  
         </form>
         <button 
         className="submit" 
         onClick={RandomImage}
         type="submit">
            Get a New Meme Image
         </button>

         <img className="imgs" src={images.url} alt="" ></img>
      </div>


   )
}



export default Form