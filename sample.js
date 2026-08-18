// Sample file with intentional bugs — for CodeRabbit testing

function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i <= prices.length; i++) {
    total += prices[i];
  }
  return total;
}

function getUserName(user) {
  return user.name.toUpperCase();
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}


function findItem(items, id) {
  const item = items.find((i) => i.id = id);
  return item;
}

function greet(name) {

  if (name == null) {
    return "Anonymous";
  }
  return "Hello, " + name;
}

function processOrders(orders) {
  return new Promise((resolve, reject) => {var result = [];
  for (var i = 0; i < orders.length; i++) {
      setTimeout(function () {
        result.push(orders[i].id);
      }, 100);
    }
    resolve(result);
  });
}

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

const config = {
  apiUrl: "https://api.example.com",
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
