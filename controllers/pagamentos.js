module.exports = function(app){


	app.get('/pagamentos', function(req, res){
		res.send('ok');
	});

	app.get('/teste', function(req, res){
  console.log('Recebida requisicao de teste.')
  res.send('OK.');
});



app.post("/pagamentos/pagamento",function(req, res) {
    	
  console.log('Recebida requisicao de POST .')
	
	var pagamento = req.body;
	console.log('Dados de pagamento/n');
	console.log(pagamento);
	res.send('ok');
  });



}
