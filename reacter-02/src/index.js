import React from 'react';
import ReactDOM from 'react-dom';


const date = new Date()
const currentTime = date.getHours()

let greeting;
let customColor = {
    color:""
}

if(currentTime<12){
    greeting = "Good Morning";
    customColor.color = 'red';
} else if (currentTime<18){
    greeting = "Good Afternoon";
    customColor.color = 'green';
} else {
    greeting = 'Good Night';
    customColor.color = 'blue';
}

ReactDOM.render(
    <h1 className='heading' style={customColor}>
        {greeting}
    </h1>,
    document.getElementById('root')
)