const http = require('http');

const server = http.createServer((req, res) => {
  fetchData()
    .then(data => {
      res.end(data);
    })
    .catch(err => {
      console.error('Error:', err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    });
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