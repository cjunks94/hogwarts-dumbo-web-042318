import React from 'react';
// import HogPics from '../hog-imgs'
// - render each hog name and picture in a tile, and show the hog's details upon a user's click
// click and flip to pig ass

const PigPileCard = (props) => {
  return (
    <div className= 'ui-8-wide-column'>
      <img src={require(`../hog-imgs/${props.pickledPotterPigProps.name.toLowerCase().split(' ').join("_")}.jpg`)} />
      <li>

          {props.pickledPotterPigProps.name}
      </li>
     </div>
  )
}

export default PigPileCard
