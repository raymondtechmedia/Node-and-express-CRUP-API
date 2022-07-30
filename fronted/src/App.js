
import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'
import Header from './Component/Header';

function App(props) {
  useEffect(() => {
    Axios.get("http://localhost:5000/read").then(res => {
      setDataList(res.data)
    })
  }, [])

  const handlechange = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:5000/post", { fName: fName, lName: lName, Age: Age })
    setfName('')
    setlName('')
    setAge('')
    Axios.get("http://localhost:5000/read").then(res => {
      setDataList(res.data)
    })
  }
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [Age, setAge] = useState('')
  const [dataList, setDataList] = useState([])
  return (
    <div className="App">
      <Header title='Employees Database' />
      <div className="main">
        <form className="main-form">
          <div className="form-field">
            <label>First Name</label>
            <input value={fName} type="text" onChange={(e) => setfName(e.target.value)} />

          </div>

          <div className="form-field">
            <label>Last Name</label>
            <input value={lName} type="text" onChange={(e) => setlName(e.target.value)} />
          </div>

          <div className="form-field">
            <label>Age</label>
            <input value={Age} type="text" onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className='btn' onClick={handlechange}>Add</button>
          <h2>Employee details</h2>
          {dataList.map((list) => {
            return (
              <div className='datalist'>
                <p>{list.fName}  {list.lName}</p>
                <li>{list.Age}</li> <i className="fas fa-delete"></i>
              </div>
            )
          })}
        </form>
      </div>
    </div>
  );
}

export default App;
