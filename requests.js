fetch('/users', {
  method: "POST",
  body: JSON.stringify({username: "Demo"}),
  headers: {"Content-Type": "application/json"}
}).then(res => res.json()).then(resBody => console.log(resBody));

// Client sending request
const data = {
  firstName: 'John',
  lastName: 'Adams'
};

fetch('http://localhost:4000/users', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(data);
})


fetch('http://localhost:4000/users?firstName=John&lastName=Adams', {
    method: 'GET'
})

fetch('http://localhost:4000/users/John/Adams', {
    method: 'POST'
})
