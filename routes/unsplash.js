

//hit this api:
// `https://api.unsplash.com/photos/?client_id=${API_KEY}`


const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;
const apiKey = process.env.API_KEY;
const unsplashUrl = 'https://api.unsplash.com/search/photos';
const urlId = 'https://api.unsplash.com/photos';
const collectUrl = 'https://api.unsplash.com/search';
const collectId = 'https://api.unsplash.com/collections';

// 
//get all photos by name
router.get('/unsplash', function (req, res, next) {
 
    const options = {
        params: {
          client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query
        },
        withCredentials: true
      };
  axios.get(`${unsplashUrl}` , options).then(function (response) {
    // res.send(response.data);
    var body = response.data;
    res.json(body);
    // console.log(body)
    // res.render('locations', {body: body})
  })
  .catch(err => console.log(err));
});

//Search photo by id
router.get('/unsplash/:id', function (req, res, next) {
  const options = {
    params: {
      client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query
    },
    withCredentials: true
  }
  axios.get(`${urlId}/${req.params.id}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      // console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send(error);
      console.log(error);
    });
});

//get extra details of one user
router.get('/users/:id', function (req, res, next) {
  const options = {
    params: {
      client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query
    },
    withCredentials: true
  }
  axios.get(`${urlId}/${req.params.id}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send(error);
      console.log(error);
    });
});


//display new photos
router.get('/photos', function (req, res, next) {
  const options = {
    params: {
      client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query
    },
    withCredentials: true
  }
  axios.get(`${urlId}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      // console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
      console.log(error);
    });
});


//display collections
router.get('/collections', function (req, res, next) {
  const options = {
    params: {
      client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query
    },
    withCredentials: true
  }
  axios.get(`${collectUrl}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      // console.log('search from collection',response.data);
      // console.log('search from related searcg',response.data.related_searches);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send(error);
      // console.log(error);
    });
});


//display collections by id
router.get('/:id', function (req, res, next) {
  const options = {
    params: {
      client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query,
    },
    withCredentials: true
  }
  axios.get(`${collectId}/${req.params.id}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      // console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send(error);
      // console.log(error);
    });
});

//add submit POST route
// router.post('/collections/:id/add', (req, res) => {
//   const options = {
//     params: {
//       client_id: apiKey,
//       name: req.query.title || '',
//       page: req.query.page || 1,
//       description: req.query.description || '',
//       query: req.query
//     },
//     withCredentials: true
//   }

//   const newCollection = ({ 
//      title: req.body.title,
//     image: req.body.image,
//     description: req.body.description})

//   axios.post(`${collectId}/${req.params.id}/add`, options, newCollection).then(function (response) {
//       // res.send(response.data);
//       // var body = response.data;
//       var body = response.data;
//       console.log('res data', response.data);
//       console.log('body data', body.data);
//       console.log('neew collection', newCollection);
//       res.send(newCollection);
//       res.json(body);
//     })
//     .catch(function (error) {
//       res.status(404).send(error);
//       console.log(error);
//     });
// });



module.exports = router;