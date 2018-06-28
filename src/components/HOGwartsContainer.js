import React from 'react';
import PigPileCard from './PigPileCard';
// - render each hog name and picture in a tile, and show the hog's details upon a user's click

class HOGwartsContainer extends React.Component{
  renderPigs = () => {
    console.log('bonjour');
    return this.props.pickledPorkProps.map(pig => {
      return <PigPileCard pickledPotterPigProps={pig}/>
    })

  }
  render(){
    // console.log(this.props);

  return (
    <div>
      <ul className='ui-grid-container'>
        {this.renderPigs()}
      </ul>
    </div>
  )}
}

export default HOGwartsContainer
