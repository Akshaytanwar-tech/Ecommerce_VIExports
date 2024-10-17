const createOrder = async (
  item_name,
  item_price,
  quantity,
  customer_name,
  customer_address
) => {
  const response = await fetch(`http://localhost:5000/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      item_name: item_name,
      item_price: item_price,
      quantity: quantity,
      customer_name: customer_name,
      customer_address: customer_address,
    }),
  });
  const json = await response.json();

  return json;
};
const bulkOrder = async (array, customer_name, customer_address) => {
  const response = await fetch(`http://localhost:5000/api/orders/bulk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      array: array,
      customer_name: customer_name,
      customer_address: customer_name,
    }),
  });
  const json = await response.json();

  return json;
};
const fetchOrder = async () => {
  const response = await fetch(`http://localhost:5000/api/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();

  return json;
};
export { createOrder, bulkOrder, fetchOrder };
