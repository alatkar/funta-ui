import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';


function RegistrationForm(props) {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    city: "",
    postalCode: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null
  })

  const handleChange = (e) => {
    const {id, value} = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))

  }

  const redirectToHome = () => {
    props.updateTitle('NewsFeed')
    props.history.push("/home");
  }

  const redirectToLogin = () => {
    props.updateTitle('Login')
    props.history.push('/login');
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (!state.email || !state.password) {
      props.showError("All fields are mandatory");
    }
    else if(state.password === state.confirmPassword) {
      // sendDetailsToServer() send details to server, make API calls
      console.log("Passwords matched")
      redirectToHome();
    } else {
      props.showError("Passwords do not match");
    }
  }



  return(
    <div className="card col-12 col-lg-6 login-card mt-2 hv-center">
            <form>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputFirstName">First Name</label>
                  <input type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      value={state.firstName}
                      onChange={handleChange}
                  />
              </div>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputLastName">Last Name</label>
                  <input type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      value={state.lastName}
                      onChange={handleChange}
                  />
              </div>


              <div className="form-group text-left">
                  <label htmlFor="exampleInputCity">City</label>
                  <input type="text"
                      className="form-control"
                      id="city"
                      placeholder="City"
                      value={state.city}
                      onChange={handleChange}
                  />
              </div>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputPostalCode">Postal Code</label>
                  <input type="text"
                      className="form-control"
                      id="postalCode"
                      placeholder="Postal Code"
                      value={state.postalCode}
                      onChange={handleChange}
                  />
              </div>

              <div className="form-group text-left">
                  <label htmlFor="exampleInputCountry">Country</label>
                  <input type="text"
                      className="form-control"
                      id="country"
                      placeholder="Country"
                      value={state.country}
                      onChange={handleChange}
                  />
              </div>

                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       aria-describedby="emailHelp"
                       placeholder="Enter email"
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Register
                </button>
            </form>

            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
            </div>
        </div>
  )
}

export default withRouter(RegistrationForm);
