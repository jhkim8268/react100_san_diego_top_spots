import React, { Component } from 'react';
import Axios from 'axios';
import TopSpot from './topspot';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
    // this.componentWillMount=this.componentWillMount.bind(this)
  }

  componentWillMount() {
    Axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  
render() {
    return (
      <div className='App'>
        <div className='container'>
          
          <div className='form-group'>
            <div className='card-body mt-5 alert alert-dark' role='alert'> 
              <h1 className='card-title'>San Diego Top Spots</h1>
              <p className='card-subtitle'>A list of the top 30 places to see in San Diego, California.</p> 
            </div> 
          </div>

          <div className='form-group'>
            { 
              this.state.topspots.map(topspot => (
                <div className='card-body alert alert-dark' role='alert' key={topspot.id}>
                  <TopSpot 
                    name={topspot.name}
                    description={topspot.description}
                    location={'https://maps.google.com/?q=' + topspot.location[0] + ',' +topspot.location[1]} 
                  />
                </div>
              ))
            }
          </div>

        </div>
      </div>
    );
  }
}
// export default App;
