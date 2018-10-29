import React from 'react';
import ReactDOM from 'react-dom';
import TonightsPlan from "./today_plan_comp";

const friends = [
    {
        title: "Yummmmmmm",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
        title: "Hey Guys!  Wait Up!",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
        title: "Yikes",
        src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
];

// New component class starts here:
class Friend extends React.Component {

    //execute this method on a event click attribute on the button

    scream(){
        alert('AHHHHHHHHHHHH');
    }

    render() {
        let friend = friends[1];
        return (
            <div>
                <h1>{friend.title}</h1>
                <img width={320} src={friend.src} />
                <br/>
                <button onClick={this.scream}>Scream</button>
                <TonightsPlan/>
            </div>
        );
    }
}

//ReactDOM.render(<Friend />, document.getElementById('app'));

export default Friend