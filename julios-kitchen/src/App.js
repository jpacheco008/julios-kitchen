import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config, postURL } from "./services";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Order from "./components/Order";
import Recipt from "./components/Recipt";
import Appetizers from "./components/Appetizers";
import Entrees from "./components/Entrees";
import Desserts from "./components/Desserts";
import Footer from "./components/Footer"
import './App.css';

function App() {

  const [data, setData] = useState([])
  const [records, setRecords] = useState([])
  const [toggleFecth, setToggleFetch] = useState(false)


  useEffect(() => {
    const getMenu = async () => {
      const resp = await axios.get(baseURL, config);
      const posting = await axios.get(postURL, config)
      console.log(resp)
      console.log(posting)
      setData(resp.data.records);
      setRecords(posting.data.records);
    }
    getMenu();
  }, [toggleFecth])

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
          {/* <Menu menu={info} key={info.id} setToggleFetch={setToggleFetch}/> */}
          <Appetizers menu={data} key={data.id} setToggleFetch={setToggleFetch}/>
          <Entrees menu={data} key={data.id} setToggleFetch={setToggleFetch}/>         
          <Desserts menu={data} key={data.id} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/order">
        <Order menu={data} setToggleFetch={setToggleFetch}/>         
      </Route>
      <Route path="/recipt">
        {records.map((recipts) => (
          <Recipt recipts={recipts} key={recipts.id} setToggleFetch={setToggleFetch}/>
        ))}
      </Route>
      <Footer />
    </div>
  );
}

export default App;
