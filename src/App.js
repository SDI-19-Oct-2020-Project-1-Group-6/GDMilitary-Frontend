import React from 'react'
import './App.css';
import SubmitReview from './SubmitReview/component/SubmitReview'
import UnitInformationBox from './units/UnitInformationBox'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      unit: undefined
    }
  }
  render() {
    return (
      <div className="container">
      <UnitInformationBox unit={this.state.unit} />
      <SubmitReview unit={this.state.unit} />
      </div>
    );
  }
}

export default App;
