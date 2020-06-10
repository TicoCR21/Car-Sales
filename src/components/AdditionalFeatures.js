import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";
import { addFeature } from "./actions";

class AdditionalFeatures extends React.Component
{
  render()
  {
    return (
      <div className = "content" >
        <h4>Additional Features</h4>
        {
          this.props.additionalFeatures.length ?
            <ol type = "1" >
              {
                this.props.additionalFeatures.map( item => ( <AdditionalFeature 
                                                                key = { item.id } 
                                                                feature = { item }
                                                                onClick = { this.props.addFeature } /> ) ) 
              }
            </ol> : 
            <p>Nice looking car!</p>
        }
      </div>
    );
  }
};

const mapStateToProps = state => { return { additionalFeatures : state.additionalFeatures } }

export default connect( mapStateToProps , { addFeature } )( AdditionalFeatures );
