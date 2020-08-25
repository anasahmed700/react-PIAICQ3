import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [state, setState] = useState(0)
  const [list, setList] = useState([])
  
  const fetchApi = async () => {
    const params = {
      id: 1, 
      first_name: "Azhar",
      last_name: "Ali",
      email: "azali@gmail.com"
    }
    
    const del_res = await Axios.delete("http://localhost:3000/employees/1")
    console.log(del_res)

    const post_res = await Axios.post("http://localhost:3000/employees", params)
    console.log(post_res)

    const get_res = await Axios.get("http://localhost:3000/employees")
    setList(get_res.data)
    
  }
useEffect(() => {
  console.log("Effect")
  setState(0)
  fetchApi()
}, [state])

  return (
    <div className="App"> 
      <h1>Playing with APIs</h1>
      {
        list.map((val, key) => {
          return(
          <li key={key}>{val.first_name} {val.last_name}</li>
          )
        })
      }
    </div>
  );
}

export default App;
