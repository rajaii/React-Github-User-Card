import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import UserCard from './components/UserCard.js';
import FollowerCard from './components/FollowerCard.js';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/rajaii')
    .then(res => {
      this.setState({
        users: res.data,
        followers: [res.data.followers, res.data.followers_url]
      })
    })
    .catch(err => console.log(err))

  }

  render() {
  return (
    <div className="App">
      <Route exact path='/' render={(props) => <UserCard followers={this.state.followers} users={this.state.users} {...props} />} />
      <Route exact path='/followers' render={(props) => <FollowerCard followers={this.state.followers} {...props} />} />
    </div>
  );
}
}

export default App;
