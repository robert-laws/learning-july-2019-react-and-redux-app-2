import React from 'react';

class UserForm extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUserFormSubmit(this.state.firstName, this.state.lastName)

    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render() {
    return (
      <div className="ui inverted teal segment">
        <div className="ui inverted teal form">
          <form onSubmit={this.handleSubmit}>
            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input type="text" placeholder="first name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" placeholder="last name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value }) } />
              </div>
            </div>
            <div className="ui submit button" onClick={this.handleSubmit}>Submit</div>           
          </form>
        </div>
      </div>      
    )
  }
} 

export default UserForm;