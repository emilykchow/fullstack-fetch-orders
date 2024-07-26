import React, { useEffect, useState } from 'react';
import Picking from './components/Picking';
import Packing from './components/Packing';
import './App.css';

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/orders')
      .then(response => response.json())
      .then(data => {
        console.log(data); 
        setOrders(data);
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="App">
      <Picking orders={orders} />
      <Packing orders={orders} />
    </div>
  );
}

export default App;
