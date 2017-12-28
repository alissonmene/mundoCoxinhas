var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   req.session.destroy();
   res.render('index', {
     msgUsuarioSenhaErrada : null
   });
});

module.exports = router;
