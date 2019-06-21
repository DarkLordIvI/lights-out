import React from 'react';
import Bulb from './Bulb';
import BulbContext from './BulbContext';
import Tilt from 'react-tilt';

const renderBulbs = (n) =>{
    const bulbs = [];
    for(let i=1; i<=n*n; i+=5){
        bulbs.push(
            <div key={i} className="board-row">
                <Bulb value={i} />
                <Bulb value={i+1}/>
                <Bulb value={i+2}/>
                <Bulb value={i+3}/>
                <Bulb value={i+4}/>
            </div>
        );
    }

    return bulbs;
}

const Board = () => {

    return(
        <BulbContext.Consumer>
                {({activeBulbs}) =>
                <Tilt>
                    <div>
                        {renderBulbs(5, activeBulbs)}
                    </div>
                </Tilt>
                }
        </BulbContext.Consumer>
    );
}

export default Board;