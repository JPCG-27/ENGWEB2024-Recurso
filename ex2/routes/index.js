var express = require('express');
var router = express.Router();
var axios = require('axios');

const api_url = 'http://127.0.0.1:17000';

router.get('/', function(req, res, next) {
  axios.get(api_url + '/books')
    .then(response => {
      res.render('book', { books: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get(api_url + '/books/' + req.params.id)
    .then(response => {
      res.render('contrato', { book: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/entidades/:nipc', function (req, res, next) {
  axios.get(api_url + '/books?entidade=' + req.params.nipc)
    .then(response => {
      let books = response.data;
      let somatorio = books.reduce((acc, contrato) => acc + contrato.precoContratual, 0);

      let entidade = {
        "nipc": req.params.nipc,
        "nome": books[0].entidade_comunicante
      };

      res.render('entidade', { entidade: entidade, books: response.data, somatorio: somatorio });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

module.exports = router;
