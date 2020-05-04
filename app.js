const express = require('express');
const hbs     = require('hbs');
const path    = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

//deploy area
// app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/build')));
app.use(bodyParser.json()); //here


  // const { NODE_ENV = 'production' } = process.env;
  // const IN_PROD = NODE_ENV === 'production'; 


// /*Get movies page */
// const moviesP = require('./routes/movies');
// app.use('/', moviesP);

// /*Get singe movie page */
// const movieP = require('./routes/movie');
// app.use('/', movieP);


// //production mode
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }



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