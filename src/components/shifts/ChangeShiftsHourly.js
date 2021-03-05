import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import TimeSlider from './TimeSlider'
class ChangeShiftsHourly extends Component{
    constructor(){
        super();
        this.state={
            shiftOne:true,
            shiftTwo:false,
            shiftThree:false,

            startValue:0,
            endValue:0


        }
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(value){
        switch(value){
            case "hideShiftOne":
                this.setState({ shiftOne: true,shiftTwo: false,shiftThree: false,startValue:0,endValue:1 });

                break;
            case "hideShiftTwo":
                this.setState({ shiftOne: false,shiftTwo: true,shiftThree: false,startValue:8,endValue:9 });
                break;
            case "hideShiftThree":
                this.setState({ shiftOne: false,shiftTwo: false,shiftThree: true,startValue:16,endValue:17 });
                break;
        }
    }
    render(){
        const { shiftOne, shiftTwo, shiftThree } = this.state;
        return(
            <div>             
                <div>
                    
                {shiftOne && <TimeSlider startValue={this.state.startValue} endValue={this.state.endValue}/>}
               
                {shiftTwo && <TimeSlider startValue={this.state.startValue} endValue={this.state.endValue}/>}
              
                {shiftThree && <TimeSlider startValue={this.state.startValue} endValue={this.state.endValue}/>}
          
                </div>
                <div className="btn_ro"> 
                <Button className="m-2" variant="warning" onClick={()=>this.hideComponent("hideShiftOne")}>Shift 1</Button>
                <Button className="m-2" variant="warning" onClick={()=>this.hideComponent("hideShiftTwo")}>Shift 2</Button>
                <Button className="m-2" variant="warning" onClick={()=>this.hideComponent("hideShiftThree")}>Shift 3</Button>
                </div>
            </div>
        );
    }
}


export default ChangeShiftsHourly;