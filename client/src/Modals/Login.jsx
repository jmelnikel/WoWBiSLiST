import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getUserLoginData } from '../APIs/database';
import '../styling/Modals.css'

const Login = (props) => {
  const { showLogin, handleCloseLogin, setUser } = props;
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleOnChange = (field, value) => setLoginData({ ...loginData, [field]: value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const userLoginData = await getUserLoginData(loginData.email)
    console.log("This is login data coming from db", userLoginData)
    if (loginData.password === userLoginData.data.password) {
      setUser(userLoginData);
      handleCloseLogin();
      setLoginData({})
    } else {
      alert("Wrong Credentials")
    }
  }

  return (
    <Modal show={showLogin} onHide={handleCloseLogin}>
      <Modal.Header
        style={{
          backgroundColor: "rgb(25, 25, 25)",
          border: "solid rgb(47, 47, 242) 4px",
          borderBottom: "solid #FFEC1C 1px",
        }}>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "rgb(25, 25, 25)",
          border: "solid rgb(47, 47, 242) 4px",
          borderTop: "none",
          borderBottom: "solid #FFEC1C 4px",
        }}>
        <form className="LoginModal--form__container">
          <div className="LoginModal--formInput__container">
            <label htmlFor="email">Email:</label>
            <input
              className="LoginModal--formInput__field"
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={(event) => { handleOnChange("email", event.target.value) }}
              placeholder="Email"
              required
            />
          </div>
          <div className="LoginModal--formInput__container">
            <label htmlFor="password">Password:</label>
            <input
              className="LoginModal--formInput__field"
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={(event) => { handleOnChange("password", event.target.value) }}
              placeholder="Password"
              required
            />
          </div>

          <button
            className="LoginModal--form__button"
            type="submit"
            onClick={(event) => { handleSubmit(event) }}
          >Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  )
}

Login.propTypes = {
  showLogin: PropTypes.bool,
  handleCloseLogin: PropTypes.func,
  setUser: PropTypes.func,
}

export default Login;