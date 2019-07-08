import React from 'react';
import Header from './components/Header'
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default class App extends React.Component {
  state = {
    users: []
  }

  handleUserFormSubmit = (firstName, lastName) => {
    this.setState({
      users: [...this.state.users, `${firstName} ${lastName}`]
    })
  }

  render() {
    return (
      <main className="ui container">
        <Header title="Application Two" />
        <UserForm onUserFormSubmit={this.handleUserFormSubmit} />
        <UserList users={this.state.users} />
      </main>
    )
  }
}