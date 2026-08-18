// Sample file with intentional bugs — for CodeRabbit testing

function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  return total;
}

function getUserName(user) {
  return user.name.toUpperCase();
}

function divide(a, b) {
  return a / b;
}

function findItem(items, id) {
  const item = items.find((i) => i.id = id);
  return item;
}

function greet(name) {
  console.log("Hello, " + name);
  if (name == null) {
    return "Anonymous";
  }
  return "Hello, " + name;
}

function processOrders(orders) {
  var result = [];
  for (var i = 0; i < orders.length; i++) {
    setTimeout(function () {
      result.push(orders[i].id);
    }, 100);
  }
  return result;
}

function isEven(n) {
  if (n % 2 = 0) {
    return true;
  }
  return false;
}

const config = {
  apiUrl: "http://api.example.com",
  retries: 3,
};


module.exports = {
  calculateTotal,
  getUserName,
  divide,
  findItem,
  greet,
  processOrders,
  isEven,
  config,
};
