module.exports = function(app){


	app.get('/pagamentos', function(req, res){
		res.send('ok');
	});

	app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste na porta 3000.')
  res.send('OK.');
});




}
