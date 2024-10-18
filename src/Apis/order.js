import constant from "../constant/constant";

// api to create a order
const createOrder = async (
  item_name,
  item_price,
  quantity,
  customer_name,
  customer_address
) => {
  const response = await fetch(`${constant.url}/api/orders`, {
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

// api to create bulk order
const bulkOrder = async (array, customer_name, customer_address) => {
  const response = await fetch(`${constant.url}/api/orders/bulk`, {
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

// api to fetch all the orders with respect to user.
const fetchOrder = async () => {
  const response = await fetch(`${constant.url}/api/orders`, {
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
