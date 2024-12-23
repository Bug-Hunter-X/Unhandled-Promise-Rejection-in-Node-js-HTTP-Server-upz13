# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled promise rejections in asynchronous operations within an HTTP server.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

The server attempts to send a response before handling potential errors from the asynchronous `fetchData` function. If the promise rejects (due to simulated network or data issues), the server crashes without a meaningful error message.

## Solution

The solution involves using `.catch()` to handle potential errors from the `fetchData` promise. This prevents the server from crashing and allows for graceful error handling, such as sending an error response to the client.