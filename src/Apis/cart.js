const additem = async (item_name, item_price) => {
  const response = await fetch(`http://localhost:5000/api/cart/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      item_name: item_name,
      item_price: item_price,
    }),
  });
  const json = await response.json();

  return json;
};
const removeitem = async (id) => {
  const response = await fetch(`http://localhost:5000/api/cart/remove/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();

  return json;
};
const updatequantity = async (quantity, id) => {
  const response = await fetch(`http://localhost:5000/api/cart/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    body: JSON.stringify({
      quantity: quantity,
    }),
  });
  const json = await response.json();

  return json;
};
const fetchitem = async () => {
  const response = await fetch(`http://localhost:5000/api/cart/fetchcart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();

  return json;
};

export { additem, removeitem, updatequantity, fetchitem };
