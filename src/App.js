import React, { Component } from 'react';
import './App.scss';
import Action from './Action';
import Character from './Character';

class App extends Component {

  constructor ( props ) {
    super ( props );
    // initial state setup
    this.state = {
      gameInProgress: false,
      characters: [ 'alex', 'boss' ],
      actions: [
        { 'name': 'rock', 'wins': 'scissors' },
        { 'name': 'paper', 'wins': 'rock' },
        { 'name': 'scissors', 'wins': 'paper' }
      ],
      stats: {
        ties: 0,
        wins: 0,
        losses: 0
      }
    };
  }

  // log stats for fun or frustration
  incrementStats = stat => {
    // overwrite wanted parts of the state
    let localState = this.state;
    localState.stats[ stat ]++;
    this.setState ( localState );
  }

  // to run each time the search input is changed and show updated suggestions
  startGame = ( playerAction, event ) => {
    // cache sprite elements
    let characters = document.querySelectorAll ( '.characters > div' );
    // get random computer action 
    let cpuAction = this.state.actions[ Math.floor( Math.random () * Math.floor ( 3 ) ) ];
    
    // visualise player & computer action
    characters[ 0 ].dataset.action = playerAction.name;
    characters[ 1 ].dataset.action = cpuAction.name;

    // if result is a tie increase ties else increase wins/losses
    if ( playerAction.name === cpuAction.name ) this.incrementStats ( 'ties' );
    else this.incrementStats ( ( playerAction.wins === cpuAction.name ) ? 'wins' : 'losses' ); 
  }

  // reset all stats
  resetStats = ( event ) => {
    // cache sprite elements
    let characters = document.querySelectorAll ( '.characters > div' );
    characters[ 0 ].dataset.action = '';
    characters[ 1 ].dataset.action = '';
    // overwrite wanted parts of the state
    let localState = this.state;
    localState.stats = {
      ties: 0,
      wins: 0,
      losses: 0
    };
    this.setState ( localState );
  }

  render () {
    return (
      <div className="App">
        <div className="stats">
          <div className="stat">ties:{ this.state.stats.ties }</div>
          <div className="stat">wins:{ this.state.stats.wins }</div>
          <div className="stat">losses:{ this.state.stats.losses }</div>
          <button onClick={ this.resetStats }>Reset Stats</button>
        </div>
        <div className="actions">
          <div className="cta">Choose your move:</div>
          {
            this.state.actions.map ( ( action, index ) => {
              return <Action key={ index } handleClick={ this.startGame.bind ( this, action ) } { ...action } />;
            } )
          }
        </div>
        <div className="characters">
          {
            this.state.characters.map ( ( character, index ) => {
              return <Character key={ index } name={ character } />;
            } )
          }
        </div>
      </div>
    );
  }
}

export default App;