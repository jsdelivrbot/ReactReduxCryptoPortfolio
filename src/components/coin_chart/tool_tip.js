import React, { Component } from 'react';
//import './tool_tip.css';

class ToolTip extends Component {

  render() {
    const {hoverLoc, activePoint} = this.props;
    const svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();
    let placementStyles = {};
    let width = 100;
    placementStyles.width = width + 'px';
    placementStyles.left = hoverLoc + svgLocation.left - (width/2);
    
    if(svgLocation == null) {
      return(
        <div></div>
      );
    } else {
      
    }
    return (
      <div className='hover' style={ placementStyles }>
        <div className='date'>{ activePoint.d }</div>
        <div className='price'>{activePoint.p }</div>
      </div>
    )
  }
}

export default ToolTip;
