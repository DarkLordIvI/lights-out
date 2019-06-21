import React from 'react';
import './Bulb.css';
import BulbContext from './BulbContext';

const Bulb = props => {
    return(
        <BulbContext.Consumer>
            {({activeBulbs, onBulbClick}) =>
                    <div style={{backgroundColor: activeBulbs[props.value-1] === 1 ? "beige" : "grey"}} onClick={() => onBulbClick(props.value)} className="square">
                        {props.value}
                        {console.log(onBulbClick)}
                    </div>
            }
        </BulbContext.Consumer>
    );
}

export default Bulb;