import React from 'react';
import Board from './Board';
import BulbContext, {BulbStore} from './BulbContext';
import './App.css';
import Tilt from 'react-tilt';

class App extends React.Component {

  renderApp(){
    return(
      <BulbContext.Consumer>
        {({win}) => !win 
          ? <div>
            <Tilt>
            <h1>Lights Out!</h1>
            </Tilt>
            <Board />
          </div>
          : <h1>You Win!</h1> }
      </BulbContext.Consumer>
    )
  }

  render(){
    return (
      <BulbStore>
        <div className="App">
          <div className="App-header">
            {this.renderApp()}
          </div>
        </div>
      </BulbStore>
    );
  }
}

export default App;
