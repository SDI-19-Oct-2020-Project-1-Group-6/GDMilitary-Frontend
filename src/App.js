import React from 'react'
import './App.css';
import SubmitReview from './SubmitReview/component/SubmitReview'
import UnitInformationBox from './units/UnitInformationBox'

//TODO ADD SEARCH CONTAINER AND REVIEWS COMPONENTS FROM OTHER REPOS

function SearchContainer() {
  return <br />
}
function Reviews() {
  return <br />
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      screen:'main',
      lastScreen:undefined,
      unit: undefined,
      query: undefined
    }
  }
  handleChangeScreen =(newScreen) => {
    this.setState({lastScreen: this.state.screen, screen:newScreen});
  }
  handleSearch = (query) => {
    this.setState({query:query});
    this.handleChangeScreen('search');
  }
  handleUnitSelection = (unit) => {
    this.setState({unit:unit});
    this.handleChangeScreen('main');
  }
  render() {
    let screenContent='';
    if (this.state.screen === 'search') {
      screenContent=<SearchContainer query={this.state.query} />
    }else {
      if (this.state.unit) {
        screenContent=<div>
                        <UnitInformationBox unit={this.state.unit} />
                        <SubmitReview unit={this.state.unit} />
                        <Reviews unit={this.state.unit} />
                      </div>
      }else{
        screenContent=<br />
      }
    }
    return (
      <div className="container">
        {screenContent}
      </div>
    );
  }
}

export default App;
