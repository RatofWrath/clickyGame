import React, { Component } from "react";
import ProfessionCard from "./components/ProfessionCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import professions from "./professions.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    professions,
    score: 0,
    topScore: 0,
    clickedProfessions: []
  };

  clickHandler = (id) => {
    this.shuffleProfessions();
    this.givePoints();
  }

  shuffleProfessions = (array) => {
    console.log("You have clicked on a card");
    for(let i = 0; i < professions.length; i++){
      let j = Math.floor(Math.random() * 12);
      console.log(professions[i], professions[j]);
      let temp = professions[i];
      professions[i] = professions[j];
      professions[j] = temp;
      console.log(professions[j], professions[i]);
    }
    this.setState({professions})
  }

  givePoints = (id) => {

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} topScore={this.state.topScore}>WoW Memory Game</Title>
        {this.state.professions.map(profession => (
          <ProfessionCard
            id={profession.id}
            image={profession.image}
            name={profession.name}
            clickHandler={this.clickHandler}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
