import React from 'react'
import './App.css';
import SubmitReview from './submit/SubmitReview'
import UnitInformationBox from './units/UnitInformationBox'
//import ReviewsDisplay from './DisplayReview/displays/src/ReviewsDisplay'
import SearchComponent from './search/SearchComponent'
import Header from './search/Header'

function ReviewsDisplay(props) {
  return <br />
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      screen:'search',
      lastScreen:undefined,
      unit: undefined,
      query: undefined
    }
  }
  handleChangeScreen =(newScreen) => {
    this.setState({lastScreen: this.state.screen, screen:newScreen});
  }
  handleUnitSelection = (unit) => {
    this.setState({unit:unit});
    this.handleChangeScreen('main');
  }
  render() {
    let screenContent='';
    if (this.state.screen === 'search') {
      screenContent=<SearchComponent onChangeUnit={this.handleUnitSelection}/>
    }else {
      if (this.state.unit) {
        screenContent=<div>
                        <UnitInformationBox unit={this.state.unit} />
                        <SubmitReview unit={this.state.unit} />
                        <ReviewsDisplay unit={this.state.unit} />
                      </div>
      }else{
        screenContent=<br />
      }
    }
    
    return (
      <div className="ui container" style={{marginTop : '10px' }}>
      <Header onSearch={()=>this.handleChangeScreen('search')}/>
        {screenContent}
      </div>
    );
  }
}

export default App;
