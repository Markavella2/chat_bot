//Take one

// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const querystring = require("querystring");
// const figlet = require("figlet");

// const server = http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == "/") {
//     fs.readFile("index.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/otherpage") {
//     fs.readFile("otherpage.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/otherotherpage") {
//     fs.readFile("otherotherpage.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/api") {
//     if ("student" in params) {
//       if (params["student"] == "leon") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         const objToJson = {
//           name: "leon",
//           status: "Boss Man",
//           currentOccupation: "Baller",
//         };
//         res.end(JSON.stringify(objToJson));
//       } //student = leon
//       else if (params["student"] != "leon") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         const objToJson = {
//           name: "unknown",
//           status: "unknown",
//           currentOccupation: "unknown",
//         };
//         res.end(JSON.stringify(objToJson));
//       } //student != leon
//     } //student if
//   } //else if
//   else if (page == "/css/style.css") {
//     fs.readFile("css/style.css", function (err, data) {
//       res.write(data);
//       res.end();
//     });
//   } else if (page == "/js/main.js") {
//     fs.readFile("js/main.js", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/javascript" });
//       res.write(data);
//       res.end();
//     });
//   } else {
//     figlet("404!!", function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(8000);


//Take two

// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const querystring = require("querystring");
// const figlet = require("figlet");

// const server = http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);

//   let readWriteHead = (fileName, contentType) => {
//     fs.readFile(fileName, function (err, data) {
//       res.writeHead(200, { "Content-Type": contentType });
//       res.write(data);
//       res.end();
//     });
//   };
//   switch (page) {
//     case "/":
//       readWriteHead("index.html", "text/html");
//       break;
//     case "/css/style.css":
//       fs.readFile("css/style.css", function (err, data) {
//         res.write(data);
//         res.end();
//       });
//       break;
//     case "/js/main.js":
//       readWriteHead("js/main.js", "text/javascript");
//       break;
//     case "/api":
//       let a1 = [
//         "Balance Amount",
//         "Last Balance",
//         "Last Deposit",
//         "Last Withdrawal",
//       ];
//       let personStatus = "unknown";
//       let personOccupation = "unknown";

//       let objToJson = {
//         name: personName,
//         status: personStatus,
//         currentOccupation: personOccupation,
//       };

//       if (params["person"] == "leon") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         let objToJson = {
//           name: "leon",
//           status: "Boss Man",
//           currentOccupation: "Baller",
//           flip: flipRes,
//         };
//         res.end(JSON.stringify(objToJson));
//       } else {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(objToJson));
//       }
//       break;
//     default:
//       figlet("404!!", function (err, data) {
//         if (err) {
//           console.log("Something went wrong...");
//           console.dir(err);
//           return;
//         }
//         res.write(data);
//         res.end();
//       });
//   }
// });
// server.listen(8000);



//Updates:

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  // read file and write to browser
  const readHelper = (filename, contentType) => {
    fs.readFile(filename, function (err, data) {
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(data);
      res.end();
    });
  };

  //Landing page request
  if (page == '/') {
    readHelper('index.html', 'text/html');
  } else if (page == '/transfer') {
    readHelper('transfer.html', 'text/html');
  } else if (page == '/replacement') {
    readHelper('replacement.html', 'text/html');
  }

  // API Request
  else if (page == '/api') {
    if ('index' in params) {
      fs.readFile('js/questions.json', 'utf8', (err, data) => {
        if (err) {
          console.log(`Error reading file from disk: ${err}`);
        } else {
          const questions = JSON.parse(data);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(questions[params.index]));
        }
      });
    }
  }

  // return the style.css file when requested
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }

  // return the main.js file when requested
  else if (page == '/js/main.js') {
    readHelper('js/main.js', 'text/javascript');
  }

  //Return 404 error if page is not found
  else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(process.env.PORT || 8000);