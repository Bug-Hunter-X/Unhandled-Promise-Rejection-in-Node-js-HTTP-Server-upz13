const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const data = fetchData();

  // The below line will cause an error if fetchData rejects
  res.end(data);
});

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random chance of failure
      if (Math.random() < 0.5) {
        reject(new Error('Failed to fetch data'));
      } else {
        resolve('Data fetched successfully!');
      }
    }, 1000);
  });
}