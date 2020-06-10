import React from 'react';
import { connect } from "react-redux";

class Header extends React.Component
{
  render()
  {
    return (
      <>
        <figure className="image is-128x128">
          <img src={ this.props.car.image} alt={ this.props.car.name} />
        </figure>
        <h2>{ this.props.car.name}</h2>
        <p>Amount: ${ this.props.car.price}</p>
      </>
    );
  }
};

const mapStateToProps = state =>
{
  return { car : state.car };
}

export default connect( mapStateToProps , {} )( Header );
