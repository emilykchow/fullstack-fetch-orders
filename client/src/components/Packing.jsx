import React from 'react';

function Packing({ orders }) {
  const renderPackingList = () => {
    return orders.map(order => {
      const productCounts = order.lineItems.reduce((num, item) => {
        if (!num[item.productName]) {
          num[item.productName] = 0;
        }
        num[item.productName] += 1;
        return num;
      }, {});

      return (
        <div key={order.orderId} className="order">
          <h2 style={{ textDecoration: 'underline' }}>Order #{order.orderId}</h2>
          <p>Order Date: {order.orderDate}</p>
          <h3>Line Items:</h3>
          <ul>
            {Object.entries(productCounts).map(([product, count]) => (
              <li key={product}>
                {product} x{count}
              </li>
            ))}
          </ul>
          <p>Ships to: {order.customerName}</p>
          <p>Address: {order.shippingAddress}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 className="underline">Packing List</h1>
      {orders.length > 0 ? renderPackingList() : <p>No orders available</p>}
    </div>
  );
}

export default Packing;
