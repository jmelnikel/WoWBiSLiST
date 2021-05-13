import React, { useState, useEffect } from 'react';
// import './api/wowhead';
import getClientAuthToken from './api/getClientAuthToken';
import getResource from './api/getResource';
import './App.css';

const App = () => {
  const [clientAuthToken, setClientAuthToken] = useState("");
  const [tempData, setTempData] = useState("");

  useEffect(() => {
    getClientAuthToken()
      .then((clientAuthToken) => {
        setClientAuthToken(clientAuthToken.data.access_token);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);


  const handleOnClick = () => {
    getResource(clientAuthToken, "search/item")
      .then((response) => {
        setTempData(JSON.stringify(response));
      })
      .catch((error) => {
        throw new Error(error.message);
      });

  };


  return (
    <div className="App">
      <button
        onClick={handleOnClick}
      >
        Click Me
      </button>
      <div>
        {/* <a href="#" data-wowhead="item=22418" ></a> */}
        {tempData}
      </div>
    </div>
  );
};

export default App;
