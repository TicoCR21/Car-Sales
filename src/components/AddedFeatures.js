import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from "react-redux";

class AddedFeatures extends React.Component
{
  render()
  {
    return (
      <div className = "content" >
        <h6> Added features: </h6>
        { 
          this.props.features.length ? 
            <ol type = "1" >
              { 
                this.props.features.map( item => ( <AddedFeature 
                                                          key = { item.id } 
                                                          feature = { item } /> ) ) 
              }
            </ol> 
            : 
            <p> You can purchase items from the store. </p>
        }
      </div>
    );
  }
}

const mapStateToProps = state => { return { features : state.car.features } };

export default connect( mapStateToProps, {  } )( AddedFeatures );
