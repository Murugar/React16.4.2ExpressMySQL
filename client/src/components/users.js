import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h3> Connected to MYSQL Database  </h3>        
        
      </div>
    );
  }
}

export default Users;
