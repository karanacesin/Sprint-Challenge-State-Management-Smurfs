import React, { useState, useEffect } from "react";
import "./App.css";
import {SmurfContext} from '../contexts/SmurfContext'
import {Smurf} from './smurf'
import SmurfForm from './smurfForm'
import axios from 'axios'

function App () {

  const [smurf, setSmurf] = useState() ;

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        setSmurf(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })
  
    return (
      <SmurfContext.Provider value={{smurf}}>
        <div className="App">
          <h1>SMURFS!</h1>
          <Smurf />
          <SmurfForm />
        </div>
      </SmurfContext.Provider>
    );
  
}

export default App;
