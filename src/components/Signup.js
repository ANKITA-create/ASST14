import React, { Component } from 'react';
import { auth,createUserDocument } from '../firebase';
import  './SignupElements.css';

class Singup extends Component {
  state = { name: '',flatid: '', phone: '' ,email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, flatid , phone , name} = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, { flatid , phone , name });
    } catch (error) {
      console.log('error', error);
    }

    this.setState({ name: '' , flatid: '', phone: '' , email: '', password: '' });
  };

  render() {
    const { name,flatid, phone,email, password } = this.state;
    return (
      <div>
        <form className="signup-login" onSubmit={this.handleSubmit}>
          <h2>Signup</h2>

            <input
            type="name"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />

          <input
            type="flatid"
            name="flatid"
            value={flatid}
            onChange={this.handleChange}
            placeholder="Flatno"
          />

          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone no"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Signup</button>
          <a href="/residents">Sign here</a>

        </form>
      </div>
    );
  }
}

export default Singup;
