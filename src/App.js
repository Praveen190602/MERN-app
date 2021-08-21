import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [bikeName, setBikeName] = useState('');
  const [bikeManufacture, setBikeManufacture] = useState(0);
  const [bikeSales, setBikeSales] = useState('');

  const [newBikeName, setNewBikeName] = useState('');
  const [newBikeManufacture, setNewBikeManufacture] = useState(0);
  const [newBikeSales, setNewBikeSales] = useState('');

  const [bikeList, setBikeList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8085/api/read').then((response) => {
      setBikeList(response.data);
    })
  }, [])

  const addToList = () => {
    axios.post('http://localhost:8085/api/save', {
      bikeName: bikeName,
      bikeManufacture: bikeManufacture,
      bikeSales: bikeSales
    });
  };

  const updateBike = (id) => {
    axios.put('http://localhost:8085/api/update', {
      id: id,
      newBikeName: newBikeName,
      newBikeManufacture: newBikeManufacture,
      newBikeSales: newBikeSales
    });
  };

  const deleteBike = (id) => {
    axios.delete(`http://localhost:8085/api/delete/${id}`);
  };

  return (
    <div className="App">
      <h1>BIKE SHOWROOM</h1>

      <label>Bike Name</label>
      <input type="text" onChange={(event) => {setBikeName(event.target.value)}}/>
      <label>Bike Manufacture</label>
      <input type="text" onChange={(event) => {setBikeManufacture(event.target.value)}}/>
      <label>Bike Sales</label>
      <input type="text" onChange={(event) => {setBikeSales(event.target.value)}}/>

      <button onClick={addToList}>Add</button>

      <h1>Bike List</h1>
      {bikeList.map((val, key) => {
        return <div key={key} className="bike"> <h1> {val.bikeName} </h1>
        <h1> {val.bikeManufacture} </h1>
        <h1> {val.bikeSales} </h1>
        <input type="text" placeholder="New Bike Name..." onChange={(event) => {setNewBikeName(event.target.value);}}/>
        <input type="text" placeholder="New Bike Manufacture..."onChange={(event) => {setNewBikeManufacture(event.target.value);}}/>
        <input type="text" placeholder="New Bike Sales..."onChange={(event) => {setNewBikeSales(event.target.value);}}/>
        <button onClick={()=> updateBike(val._id)}>Update</button>
        <button onClick={() => deleteBike(val._id)}>Delete</button>
        </div>
      })}
      </div>

  );
}

export default App;