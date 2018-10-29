import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {

    //this acts like a prop of instance because is a getter method
    get nameOfThis (){
        return 'AlocerX';
    }

    render(){

        let task;

        if(fiftyFifty){
            task = <h1>{this.nameOfThis} Tonight I'm going out WOOO</h1>;
        }else{
            task = <h1>{this.nameOfThis} Tonight I'm going to bed WOOO</h1>;
        }

        return task;
    }
}

//ReactDOM.render(<Friend />, document.getElementById('app'));

export default TonightsPlan