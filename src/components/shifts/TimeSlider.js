import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import TimeRange from 'react-timeline-range-slider';
import { format,set } from "date-fns";


let now = new Date();
let getTodayAtSpecificHour = (hour = 24) =>
set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 });

let selectedIntervalFirst = [
getTodayAtSpecificHour(0),
getTodayAtSpecificHour(1)
];
let selectedIntervalSecond = [
getTodayAtSpecificHour(8),
getTodayAtSpecificHour(9)
];
let selectedIntervalThird = [
getTodayAtSpecificHour(16),
getTodayAtSpecificHour(17)
];

let timelineIntervalFirst = [
getTodayAtSpecificHour(0),
getTodayAtSpecificHour(8)
];

let timelineIntervalSecond = [
getTodayAtSpecificHour(8),
getTodayAtSpecificHour(16)
];

let timelineIntervalThird = [
getTodayAtSpecificHour(16),
getTodayAtSpecificHour(24)
];


class TimeSlider extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false,
            selectedIntervalFirst,
            selectedIntervalSecond,
            selectedIntervalThird,
            timelineIntervalFirst,
            timelineIntervalSecond,
            timelineIntervalThird,
            selectedInterval : selectedIntervalFirst,
            timelineInterval: timelineIntervalFirst
            };
    }


errorHandler = ({ error }) => this.setState({ error });
onChangeCallback = (selectedInterval) => this.setState({ selectedInterval });

componentDidMount(){
    if(this.props.startValue===0){
        this.setState({selectedInterval: selectedIntervalFirst,timelineInterval: timelineIntervalFirst})
    }else if(this.props.startValue===8){
        this.setState({selectedInterval: selectedIntervalSecond,timelineInterval:timelineIntervalSecond})
    }
    else if(this.props.startValue===16){
        this.setState({selectedInterval:selectedIntervalThird,timelineInterval:timelineIntervalThird})
    }
}
    render(){
        const { error,selectedInterval,timelineInterval} = this.state;


        return(
            <div>
                <div style={{ textAlign:'left'}}>
                <div className="line_h"><h4>Hourly overall </h4> <h4>79%</h4></div>
                <h5 className="text-start">Time Range per HR</h5>
                {this.props.value}
               <div className="info">
                <span>Selected Interval: </span>
                {selectedInterval.map((d, i) => (
                <span key={i}>{format(d, "dd MMM, HH:mm")}</span>
                ))}
                </div>

                    <TimeRange
                    error={error}
                    ticksNumber={32}
                    step={900000}
                    selectedInterval={selectedInterval}
                    timelineInterval={timelineInterval}
                    onUpdateCallback={this.errorHandler}
                    onChangeCallback={this.onChangeCallback}
                    /> 
            

                </div>

            </div>
        );
    }
}


export default TimeSlider;