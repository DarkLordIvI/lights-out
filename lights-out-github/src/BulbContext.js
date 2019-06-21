import React from 'react';


const Context = React.createContext([]);

export class BulbStore extends React.Component{
    state = {activeBulbs: [...Array(25)].map(e=>~~(Math.random()*2)), win: false}

    onBulbClick = (value) => {

        let bulbs = this.state.activeBulbs.slice();
        switch(value){
            case 2:case 3: case 4:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value] = this.checkIfOn(value);
                    bulbs[value-2] = this.checkIfOn(value-2);
                    bulbs[value+4] = this.checkIfOn(value+4);
                    break;
            case 22: case 23: case 24:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value] = this.checkIfOn(value);
                    bulbs[value-2] = this.checkIfOn(value-2);
                    bulbs[value-6] = this.checkIfOn(value-6);
                    break;
            case 6: case 11: case 16:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value] = this.checkIfOn(value);
                    bulbs[value-6] = this.checkIfOn(value-6);
                    bulbs[value+4] = this.checkIfOn(value+4);
                    break;
            case 10: case 15: case 20:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value-2] = this.checkIfOn(value-2);
                    bulbs[value-6] = this.checkIfOn(value-6);
                    bulbs[value+4] = this.checkIfOn(value+4);
                    break;
            case 1:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value] = this.checkIfOn(value);
                    bulbs[value+4] = this.checkIfOn(value+4);
                    break;
            case 5:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value-2] = this.checkIfOn(value-2);
                    bulbs[value+4] = this.checkIfOn(value+4);
                    break;
            case 21:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value] = this.checkIfOn(value);
                    bulbs[value-6] = this.checkIfOn(value-6);
                    break;
            case 25:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value-2] = this.checkIfOn(value-2);
                    bulbs[value-6] = this.checkIfOn(value-6);
                    break;
            default:
                    bulbs[value-1] = this.checkIfOn(value-1);
                    bulbs[value] = this.checkIfOn(value);
                    bulbs[value-2] = this.checkIfOn(value-2);
                    bulbs[value-6] = this.checkIfOn(value-6);
                    bulbs[value+4] = this.checkIfOn(value+4);
        }

        this.setState({activeBulbs: bulbs});   
  
    }

    checkIfOn(value){
        return this.state.activeBulbs[value] === 1 ? 0 : 1;
    }

    componentDidUpdate(){
        if(this.state.win === false){
            if(this.state.activeBulbs.every( val => val === 0 )){
                this.setState({win: true});
            } 
        } 
    }

    render(){
        return(
            <Context.Provider value={{ ...this.state, onBulbClick: this.onBulbClick}} >
                { this.props.children }
            </Context.Provider>
        );
    }
}

export default Context;