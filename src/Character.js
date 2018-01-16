import React from 'react';

class Character extends React.Component {
  render () {
    return (
      <div className={ this.props.name } data-action="" />
    );
  }
}

export default Character;