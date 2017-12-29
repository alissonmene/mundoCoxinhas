var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    msgUsuarioSenhaErrada : null

  });
});


router.post('/logar', function(req, res, next) {



    req.getConnection(function(err,connection){
          connection.query('SELECT a.*, ap.id_perfil FROM administrador a inner join administrador_perfil ap on a.id_administrador = ap.id_administrador  WHERE email = ? and senha = SHA1(?)',[req.body.email, req.body.password ],function(err,rows){
            if (rows.length == 0){
              res.render('index', {
                msgUsuarioSenhaErrada: 'Email ou Senha Errado!'
              });
            }else {

                administrador = new  Object();
                var perfils = new Array();
                administrador.nome = rows[0].nome;
                administrador.email =  rows[0].email;
                administrador.unidade =  rows[0].id_unidade;
                administrador.id_administrador =  rows[0].id_administrador;
                administrador.gerenteGeral = false;
                administrador.gerente = false;

                for (i =0; i < rows.length; i++ ){
                  perfils.push(rows[i].id_perfil);

                  // Gerente Geral
                  if (rows[i].id_perfil == 3){
                    administrador.gerenteGeral = true;
                  }

                  if (rows[i].id_perfil == 2){
                    administrador.gerente = true;
                  }

                }

               administrador.perfils = perfils;
               req.session.administrador = administrador;

                res.redirect('/pedido');
              }
          });
     });

});

module.exports = router;
