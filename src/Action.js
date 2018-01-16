import React from 'react';

class Action extends React.Component {
  render () {
    return (
      <div className="action" onClick={ this.props.handleClick } data-action={ this.props.name } />
    );
  }
}

export default Action;