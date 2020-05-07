

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
const collectUrl = 'https://api.unsplash.com/collections';

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
    console.log(body)
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
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
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
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
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
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});


//display collections by id
router.get('/collection/:id', function (req, res, next) {
  const options = {
    params: {
      client_id: apiKey,
      name: req.query.title || '',
      page: req.query.page || 1,
      query: req.query
    },
    withCredentials: true
  }
  axios.get(`${collectUrl}/${req.params.id}`, options).then(function (response) {
      // res.send(response.data);
      // var body = response.data;
      var body = response.data;
      console.log(response.data);
      res.json(body);
    })
    .catch(function (error) {
      res.status(404).send();
    });
});


module.exports = router;