import React, { Component } from 'react';

// import components
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Scores from "./components/Scores";
import PokemonCard from "./components/PokemonCard";

// the pokemon data
import pokemon from "./pokemon.json"

// css for app
import './App.css';

class App extends Component {

  // create the state object (this.state)
  state = {
    pokemon,
    score: 0,
    highScore: 0,
    message: "Click as many images as you can without repeating any!",
    clicks: [],
    clickMessage: "Good Luck!"
  }


  // reset the game if the user loses
  resetGame = () => {
    this.setState({
      score: 0,
      clicks: [],
    });
  }



  // function that fires when an image is clicked on 
  handleClick = (id) => {
    // console.log(id);
    // console.log(this.state.clicks);
    if ((this.state.clicks.includes(id))) {

      this.setState({
        clickMessage: "Incorrect! Try Again!"
      })

      // check if the current score is higher then the current high score
      if (this.state.highScore < this.state.score) {
        const highScore = this.state.score;

        this.setState({
          highScore: highScore
        })
      }

      this.resetGame();
    }
    else {
      // push the id into the clicks array
      this.state.clicks.push(id);

      // increase the score and update state
      const newScore = (this.state.score) + 1;
      this.setState({
        score: newScore,
        clickMessage: "Correct!"
      })

      // call the shuffle pokemon function
      this.shufflePokemon();
    }
  };

  // shuffle the pokemon images
  shufflePokemon = () => {
    let pokemonArray = this.state.pokemon;

    // function to shuffle the array (credit: Rafael)
    function shuffle(array) {
      var i = 0, j = 0, temp = null
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
    // shuffle the pokemon array and set it to current state
    shuffle(pokemonArray)
    this.setState({ pokemon: pokemonArray })
  };



  // render the game and send all information to the necessary components
  render() {
    return (
      <Wrapper>

        <Nav
          title="Clicky Game"
          message={this.state.message}
        />

        <Scores
          userScore={this.state.score}
          highScore={this.state.highScore}
        />

        <div className="container">
          <div className="row clickMessage">
            <p>{this.state.clickMessage}</p>
          </div>
        </div>

        <div className="container pokemonContainer">
          <div className="row pokemonRow">

            {/* render each pokemon */}
            {this.state.pokemon.map(data =>
              <PokemonCard
                name={data.name}
                image={data.image}
                key={data.id}
                id={data.id}
                shufflePokemon={this.shufflePokemon}
                handleClick={this.handleClick}
              />
            )} {/* end map */}

          </div> {/* end row */}
        </div> {/* end container */}

      </Wrapper>
    ); // end return
  } // end render
} // end App class

export default App;
