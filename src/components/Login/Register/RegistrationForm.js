import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';


class RegistrationForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      postalCode: "",
      country: "",
      email: "",
      password: "",
      confirmPassword: "",
      successMessage: null
    }
  }

  handleChange = (e) => {
    const {id, value} = e.target
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }))

  }

  redirectToHome = () => {
    this.props.updateTitle('NewsFeed')
    this.props.history.push("/home");
  }

  redirectToLogin = () => {
    this.props.updateTitle('Login')
    this.props.history.push('/login');
  }

handleSubmitClick = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      // props.showError("All fields are mandatory");
    }
    else if(this.state.password === this.state.confirmPassword) {
      // sendDetailsToServer() send details to server, make API calls
      console.log("Passwords matched")
      // redirectToHome();
    } else {
      // props.showError("Passwords do not match");
    }
  }

render(){

  return(
    <div className="card col-12 col-lg-6 login-card mt-2 hv-center">
            <form>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputFirstName">First Name</label>
                  <input type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                  />
              </div>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputLastName">Last Name</label>
                  <input type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                  />
              </div>


              <div className="form-group text-left">
                  <label htmlFor="exampleInputCity">City</label>
                  <input type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={this.state.city}
                      onChange={this.handleChange}
                  />
              </div>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputPostalCode">Postal Code</label>
                  <input type="text"
                      className="form-control"
                      id="postalCode"
                      placeholder="Postal Code"
                      value={this.state.postalCode}
                      onChange={this.handleChange}
                  />
              </div>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputCountry">Country</label>
                  <input type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                      value={this.state.country}
                      onChange={this.handleChange}
                  />
              </div>

                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       aria-describedby="emailHelp"
                       placeholder="Enter email"
                       value={this.state.email}
                       onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleSubmitClick}
                >Register
                </button>
            </form>

            <div className="mt-2">
                <span>Already have an account? </span>
                {/* <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> */}
            </div>
        </div>
  )
}
}

export default withRouter(RegistrationForm);
