var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    msgUsuarioSenhaErrada : null

  });
});


router.post('/logar', function(req, res, next) {

    req.getConnection(function(err,connection){
          connection.query('SELECT * FROM administrador WHERE email = ? and senha = SHA1(?)',[req.body.email, req.body.password ],function(err,rows){
            if (rows.length == 0){
              res.render('index', {
                msgUsuarioSenhaErrada: 'Email ou Senha Errado!'
              });
            }else {
                var administrador = rows[0];
                req.session.administrador = administrador;
                res.redirect('/pedido');
              }
          });
     });

});

module.exports = router;
