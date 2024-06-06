var express = require('express');
var router = express.Router();

var Book = require('../controllers/book');

router.get('/', function(req, res, next) {
  /* Filter by entidade */
  if (req.query.character) {
    Book.getBooksByChar(req.query.character)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
    
    return
  }

  /* Filter by tipo */
  if (req.query.genres) {
    Book.getBooksByGenre(req.query.genre)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
    
    return
  }

  /* Normal listing */
  Book.list()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Devolve a lista de entidades comunicantes ordenada alfabeticamente e sem repetições */
router.get('/genres', function(req, res, next) {
  Book.listGenres()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Tipos agora */
router.get('/characters', function(req, res, next) {
  Book.listCharacters()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Devolve o registo com identificador id (corresponde ao campo _id da BD) */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Acrescenta um registo novo à BD */
router.post('/', function(req, res, next) {
  Book.insert(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Elmina da BD o registo com identificador id */
router.delete('/:id', function(req, res, next) {
  Book.remove(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

/* Atualiza o registo com identificador id */
router.put('/:id', function(req, res, next) {
  Book.update(req.params.id, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
