import { useEffect, useState } from "react"
import axios from "axios"
import {baseURL, config, postURL} from "./services"
import './App.css';

function App() {

  useEffect(() => {
    const getMenu = async () => {
      const resp = await axios.get(baseURL, config);
      const posting = await axios.get(postURL, config)
      console.log(resp)
      console.log(posting)
    }
    getMenu()
  }, [])

  return (
    <div className="App">

      
    </div>
  );
}

export default App;
