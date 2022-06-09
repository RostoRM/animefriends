import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      avatars: [],
      searchfield: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ avatars: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { avatars, searchfield } = this.state;
    const filteredAvatars = avatars.filter((avatar) => {
      return avatar.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !avatars.length ? (
      <h1 className="Loading">Loading Please Wait😊</h1>
    ) : (
      <div className="tc">
        <h1
          style={{ fontSize: 70 }}
          className="f4 animate__animated animate__zoomInDown  "
        >
          <span className="little_Header">Anime</span>
          <span className="big_Header"> F r i e n d s</span>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList avatars={filteredAvatars} />
        </Scroll>
      </div>
    );
  }
}

export default App;
