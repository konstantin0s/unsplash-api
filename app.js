const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const cors    = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

//enables cors
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));


  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))
//deploy area
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));



app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  
  const unsplash = require('./routes/unsplash');
    app.use('/', unsplash);



          // Set static folder
          // app.use(express.static('client/build'));
      
          // app.get('*', (req, res) => {
          //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
          // });
        
        


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port} ....Happy Surfing`);
});


//close mongodb
process.on('SIGINT', function () {

    console.log('Unspash express disconnected on app termination');
    process.exit(0);
});

module.exports = app;