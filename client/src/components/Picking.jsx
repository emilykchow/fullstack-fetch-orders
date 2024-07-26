import React from 'react';

function Picking({ orders }) {
  const itemCounts = {
    'Red Roses Bouquet': 0,
    'Box of chocolates': 0,
    'Love card': 0,
    'Women’s perfume': 0,
    'Birthday cupcake': 0,
    '$100 Visa Gift Card': 0,
    'Birthday card': 0,
    'Bottle of wine': 0,
    'Fruit basket': 0,
    'Pen': 0,
  };

  orders.forEach(order => {
    order.lineItems.forEach(item => {
      if (item.productName === 'Valentines Box') {
        itemCounts['Red Roses Bouquet'] += 1;
        itemCounts['Box of chocolates'] += 1;
        itemCounts['Love card'] += 1;
        itemCounts['Women’s perfume'] += 1;
      } else if (item.productName === 'Birthday Box') {
        itemCounts['Birthday cupcake'] += 1;
        itemCounts['$100 Visa Gift Card'] += 1;
        itemCounts['Birthday card'] += 1;
      } else if (item.productName === 'Client Gift Box') {
        itemCounts['Bottle of wine'] += 1;
        itemCounts['Fruit basket'] += 1;
        itemCounts['Pen'] += 1;
      }
    });
  });

  return (
    <div>
      <h1 className="underline">Picking List</h1>
      <ul>
        {Object.entries(itemCounts).map(([item, count]) => (
          <li key={item}>{item}: {count}</li>
        ))}
      </ul>
    </div>
  );
}

export default Picking;
