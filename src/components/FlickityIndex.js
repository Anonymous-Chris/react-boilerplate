import React,{Component} from 'react';
import Hourly from './shifts/Hourly'
import Weekly from './shifts/Weekly'
import Daily from './shifts/Daily'
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import 'flickity-as-nav-for';

class Component5 extends Component{

  render(){
    const flickityOptions = {
      //wrapAround: true,
      pageDots: false,
      autoPlay:15000,
      draggable:false
    };

    const flickityOptions1 = {
      //wrapAround: true,
      asNavFor: ".carousel-main",
      //contain: true,
      pageDots: false,
      draggable:false
    };
      return(
       <div style={{ height: '43vh'}} className=" mb-2 modul_col ml-3 mr-3" >
          <Flickity
        className="carousel carousel-nav"
       // elementType={"section"}
        options={flickityOptions1}
        // disableImagesLoaded={false}
      >
        <div className="carousel-cell" >Hourly</div>
        <div className="carousel-cell" >Daily</div>
        <div className="carousel-cell" >Weekly</div>
      
      </Flickity>
    

      <Flickity
        className="carousel carousel-main"
        //elementType={"section"}
        options={flickityOptions}
        disableImagesLoaded={false}
      >
        <div className="carousel-cell" ><Hourly/></div>
    <div className="carousel-cell" ><Daily/></div>
        <div className="carousel-cell" ><Weekly/></div>
    
      </Flickity>
        </div>
        
      ); 
  }
}

export default Component5;
