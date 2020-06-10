import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "./actions";

class AddedFeature extends React.Component
{
  render()
  {
    return (
      <li>
        <button className = "button" onClick = { () => this.props.removeFeature( this.props.feature.id ) } > X </button>
        { this.props.feature.name }
      </li>
    );
  }
  
};

export default connect( null, { removeFeature } )( AddedFeature );
