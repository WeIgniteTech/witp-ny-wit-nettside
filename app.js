import express from 'express'
import {getResourceById} from './api/api-utils.js'

const app = express();

/*
   Static resources: all the files under ./public will be returned from /
   -----------------
 */
app.use(express.static('public'));


/*
   API endpoints
   -------------
 */

/*
  Endpoint: Hent resource by Id
  Method: GET
  Path: /api/path/to/a/unique/ressource/:Id
  Request params: Id
  Response: a json resource like { resource: { id: "1", content: "resource1" } }
 */
app.get('/api/path/to/a/unique/ressource/:id', function (req, res) {

    let id = req.params.id;
    console.log(`Received a GET request /api/path/to/a/unique/ressource for the following id: '${id}'`);
    let resource = getResourceById(parseInt(id));
    console.log(`Retreived the corresponding resource: '${resource.id}'`);

    res.send(`{"resource": { "id": "${resource.id}", "content": "${resource.content}"}}`);
});


// Let Heroku eventually decide which port the application should be listen
const port = process.env.PORT || 3000
// Starting the web server
app.listen(port, () => console.log('Starting web application on port 3000...'));

// Required by ESM (ES6)
export {}
