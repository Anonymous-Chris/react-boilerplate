import React, {Component} from 'react';
import ChangeShiftsDaily from './ChangeShiftsDaily'
class Weekly extends Component{
    render(){
        return(
            <div>
             <div className="row  mr-3 ml-3">
             <h3 style={{width:'100%',textAlign:'left',margin:'0px 9px' }}> Weekly overall</h3>
               <div className="col X ml-2 mr-2 div_height">
                   <h4>Bottom X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height ">
                   <h4>Top X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height">
                   <h4>X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height">
                   <h4>X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height">
                   <h4>X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height">
                   <h4> X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height">
                   <h4> X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>

               <div className="col ml-2 mr-2 X div_height">
                   <h4>X</h4>
                   <span className="in_txt">   <h6 style={{textAlign:'left'}}> Passed X: </h6> <h6>value</h6> </span>
                    <span className="in_txt">  <h6 style={{textAlign:'left'}}> falied X: </h6>  <h6>value</h6> </span>
                    <span className="in_txt">   <h6 style={{textAlign:'left'}}> Percent: </h6> <h6>value</h6> </span>
               </div>
         

               <div className="col-lg-2 ml-2 mr-2 X pt-3 pb-3">
               <ChangeShiftsDaily/>
               </div>

               </div>
            </div>
        );
    }
}


export default Weekly;