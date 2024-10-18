import constant from "../constant/constant";

// api to add item to cart
const additem = async (item_name, item_price) => {
  const response = await fetch(`${constant.url}/api/cart/add`, {
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

// api to remove item to cart
const removeitem = async (id) => {
  const response = await fetch(`${constant.url}/api/cart/remove/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
  });
  const json = await response.json();

  return json;
};

// api to update the quantity of the cart item
const updatequantity = async (quantity, id) => {
  const response = await fetch(`${constant.url}/api/cart/update/${id}`, {
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

// api to fetch items for cart with respect to user
const fetchitem = async () => {
  const response = await fetch(`${constant.url}/api/cart/fetchcart`, {
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
