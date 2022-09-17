const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate')


//// Read data from file
const temp = fs.readFileSync(
    `${__dirname}/data/data.json`,
    'utf-8'
);

const templateHTML = fs.readFileSync(
    `${__dirname}/template/templateLoan.html`,
    'utf-8'
);

const dataObj = JSON.parse(temp);

////////////////////////
//Create Server
const server = httpServer.createServer( (req, res) =>{ //Callback function

    const {query,pathname} = url.parse(req.url, true); //object destructors

    if(query.id){// If there is query parameter named id
        // Loan Page
        if (pathname === '/' || pathname.toLowerCase() === '/loans') {
            res.writeHead(200, { // Everything ran successfully
                'Content-type': 'text/html'
            });

            const user = dataObj[Number(query.id)];
            const loanHTML = replaceTemplate(templateHTML, user);
            
            res.end(loanHTML);
        }
        
    }
    else{

        res.writeHead(404, { //Server did not find what you were looking for
            'Content-type': 'text/html'
        });
        res.end('resource not found')
    }
});

//Start listening to requests
server.listen(8000, 'localhost', ()=> {
    console.log('Listening to requests from port 8000');
});