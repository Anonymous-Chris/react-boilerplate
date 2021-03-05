import React, {Component} from 'react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

var currentDate = new Date();
class DatePickers extends Component{
    constructor(props){
        super(props);
        this.state={
            startDate: Date.parse(new Date()),
            endDate:Date.parse( new Date())
        }
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this)
    }

    handleChangeStart = startDate1 =>{
        this.setState({
            startDate: Date.parse(startDate1)
        },(startDate1)=>{this.getData(startDate1)})
    }

    handleChangeEnd = endDate1 =>{
        this.setState({
            endDate:Date.parse(endDate1)
        },(endDate1)=>{this.getData(endDate1)})
    }

    getData=()=>{
        //APIs to get data
        console.log(this.state.startDate);
        console.log(this.state.endDate)
    }

    render(){
        var {startDate,endDate}=this.state;
        return(
            <div>

                <p>{startDate} {endDate}</p>
            <div className="line_h"><h4>Weekly Overall </h4> <h4>79%</h4></div>
            <h5>Start Date Picker</h5>
            <DatePicker selected={startDate} onChange={(date)=>this.handleChangeStart(date)}/>
            <h5> End Date Picker</h5>
            <DatePicker selected={endDate} onChange={(date)=>this.handleChangeEnd(date)}/>
            </div>
        );
    }
}


export default DatePickers;