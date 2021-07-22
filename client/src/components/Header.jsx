import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Login from '../Modals/Login'
import logo from '../assets/images/logo.png'

const Header = (props) => {
  const { user, setUser } = props;

  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true)
  const handleCloseLogin = () => setShowLogin(false)
  const handleLogout = () => setUser(false);

  return (
    <>
      <header className="App--header">
        <nav className="App--header__NavBar">
          {user.data ?
            <button
              className="App--navBar__button"
              type="button"
              onClick={handleLogout}
            >Logout
            </button>
            :
            <button
              className="App--navBar__button"
              type="button"
              onClick={handleShowLogin}
            >Login
            </button>
          }
        </nav>
        <img
          className="App--titleImage"
          src={logo}
          alt="WoW BiS LiST logo"
        />
      </header>

      <Login
        showLogin={showLogin}
        handleCloseLogin={handleCloseLogin}
        setUser={setUser}
      />
    </>
  )
}

Header.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
}

export default Header
