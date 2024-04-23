const express = require(`express`);

// Order the routes from specific to generic
// Place similar paths together


// Express middleware is a series of functions that
// have access to the request object (req),
// the response object(res), and
// the next middleware function
// in the application's request-response cycle.
// example: middleware(req, res, next)
// app.use(express.middleware()) will apply it to all routes



// Error handling functions look the same as middleware functions
// except they define four parameters instead of three
// err, req, res, and next
// Custom error handler functions have to define four
// parameters; otherwise, Express won't recognize
// the function as an error handler.

const users = [
  {
      firstName: 'John',
      lastName: 'Adams'
  },
  {
      firstName: 'Thomas',
      lastName: 'Jefferson'
  },

]



const app = express();


app.use(express.json());

app.use((err, req, res, next) => {
  console.error(err);
  res.send('An error occurred!');
});

app.get(`/`, (req, res) => {
  res.status(statusCode)	// Set the HTTP status code of the response
  res.json(body)	// Send a response with a JSON body to the client
  res.send(body)	// Send a response with a dynamic body to the client
  res.send(`Hello World`);
});

app.get('/users', (req, res) => {
  try {
      // Process request data
      res.status(200);
      res.json(users);
  } catch(e) {
      // On failure
      res.status(500);
      res.send("Failed to POST to /users");
  }
})

app.get('/users', (req, res) => {
  console.log(req.query.firstName);
  console.log(req.query.lastName);
})

app.post(`/users/comments`, (req, res) => {
  const myResponse = {
    property1: "value1",
    property2: "value2",
  };
  res.json(myResponse);
});

app.post('/users/:firstName/:lastName', (req, res) => {
  console.log(req.params.firstName);   // John
  console.log(req.params.lastName);    // Adams
})

app.post(`/users`, (req, res) => {
  console.log(req.body);
});

app.put(`/users/:userId/edit`, (req, res) => {});

app.delete(`/users`, (req, res) => {});

app.patch(`/users`, (req, res) => {});

const port = 5001;

app.listen(port, console.log(`Server is listening on port ${port}`));
