import React, { Component } from "react";
import ProfessionCard from "./components/ProfessionCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import professions from "./professions.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    professions
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>WoW Memory Game</Title>
        {this.state.professions.map(profession => (
          <ProfessionCard
            id={profession.id}
            image={profession.image}
            name={profession.name}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
