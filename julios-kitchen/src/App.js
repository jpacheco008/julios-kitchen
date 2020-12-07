import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config, postURL } from "./services";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Order from "./components/Order";
import Recipt from "./components/Recipt";
import Footer from "./components/Footer"
import './App.css';

function App() {

  const [data, setData] = useState([])
  const [toggleFecth, setToggleFetch] = useState(false)


  useEffect(() => {
    const getMenu = async () => {
      const resp = await axios.get(baseURL, config);
      const posting = await axios.get(postURL, config)
      console.log(resp)
      console.log(posting)
      setData(resp.data.records);
    }
    getMenu();
  }, [toggleFecth])

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        {data.map((info) => (
          <Menu menu={info} key={info.id} setToggleFetch={setToggleFetch}/>
        ))}
      </Route>
      <Route to="/new">
        <Order setToggleFetch={setToggleFetch}/>
      </Route>
      <Route to="recipt">
        <Recipt setToggleFetch={setToggleFetch}/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
