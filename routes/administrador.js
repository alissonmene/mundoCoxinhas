var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  req.getConnection(function(err,connection){
        connection.query('select id_administrador,nome, descricao from administrador inner join unidade on administrador.id_unidade = unidade.id_unidade',function(err,rows){
          res.render('listAdm', {
            listaAdmi: rows
    });

        });
   });


});


router.get('/add', function(req, res, next) {
  req.getConnection(function(err,connection){
        connection.query('select id_unidade, descricao from  unidade ',function(err,rows){
          res.render('addAdm.ejs', {
            unidades: rows
    });
        });
   });

});

router.post('/add', function(req, res, next) {

  var sql = "INSERT INTO administrador (nome, email,senha,id_unidade) VALUES ('" + req.body.nome +"','"
   + req.body.email + "' , SHA1('"+ req.body.senha +"'),'" +req.body.unidade +  "')";
   console.log(sql);
  req.getConnection(function(err,connection){
        connection.query(sql,function(err,result){
          if (err) throw err;
          res.render('/administrador/');
        });
   });

});
module.exports = router;
