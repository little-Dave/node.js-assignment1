const http = require("http");

const users = generateUsers(Math.ceil(Math.random() * 20));

function generateUsers(number) {
  const userArray = [];
  while (userArray.length < number) {
    userArray.push(`User ${userArray.length + 1}`);
  };
  return userArray;
};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Node.js - Assignment 1</title></head>");
    res.write("<body>");
    res.write("<h1>Hello and welcome</h1><p>Hope you like pizza</p>");
    res.write(`
      <form action='/create-user' method='POST'>
        <input type='text' name='username' placeholder='enter username'/>
        <button type='submit'>submit</button>
      </form>
    `)
    res.write("</body>");
    res.write("</html>");
    res.end();
  };
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Node.js - Assignment 1</title></head>");
    res.write(`<body><ul>${users.map(user => `<li>${user}</li>`).join("")}</ul></body>`);
    res.write("</html>");
    res.end();
  };
});

server.listen(3000);