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
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [toggleFecth, setToggleFetch] = useState(false);

  useEffect(() => {
    const getMenu = async () => {
      const resp = await axios.get(baseURL, config);
      const posting = await axios.get(postURL, config);
      setData(resp.data.records);
      setRecords(posting.data.records);
    };
    getMenu();
  }, [toggleFecth]);

  //for sorting orders by number in receipt
  
  function compare( a, b ) {
    if ( a.fields.orderNumber < b.fields.orderNumber ){
      return -1;
    }
    if ( a.fields.orderNumber > b.fields.orderNumber  ){
      return 1;
    }
    return 0;
  }
  
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Appetizers menu={data} key={data.id} setToggleFetch={setToggleFetch} />
        <Entrees menu={data} key={data.id} setToggleFetch={setToggleFetch} />
        <Desserts menu={data} key={data.id} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/order">
        <Order menu={data} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/recipt">
        {records.sort(compare).map((recipts) => (
          <Recipt
            recipts={recipts}
            key={recipts.id}
            setToggleFetch={setToggleFetch}
          />
        ))}
      </Route>
      <Route path="/statistics">
        <Statistics
          records={records}
          key={records.id}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
