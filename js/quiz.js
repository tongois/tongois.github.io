$(document).ready(function(){



var quiz = [
	{
		pergunta:'Quantos ovos tem uma galinha?',
		alternativas:['dois','tres','quatro'],
		alternativaCorreta:'dois',
		name:'q1'
	},
	{
		pergunta:'Quantos doces?',
		alternativas:['vinte','sete','nove'],
		alternativaCorreta:'vinte',
		name:'q2'
	}
]
	

	var count = quiz[0].alternativas.length;
	var acertos = 0;
	for(var y= 0;y<quiz.length;y++){
		$('.conteudo').append('<div><label for="">'+quiz[y].pergunta+'</label></div>');
		for(var i = 0; i<count; i++){
		
		$('.conteudo').append('<div><input type="radio" name='+quiz[y].name+' value='+quiz[y].alternativas[i]+'>'+ quiz[y].alternativas[i]+'</div>');
			
	}
	}
	
	$('.ok').click(function(e){
		e.preventDefault();
		
		var count = quiz[0].alternativas.length;
		for(var y= 0;y<quiz.length;y++){
			for(var i = 0; i<count; i++){
				var valor =  $('input[name='+quiz[y].name+']:checked')? $('input[name='+quiz[y].name+']:checked').val():'';
					
		}
			if(valor === quiz[y].alternativaCorreta){
					acertos+=1;
				}
		}
			
			console.log('Voce acertou '+acertos +' questoes!');
		
		//console.log($('input[name="q2"]:checked').val())
	})
	
	
	
	



});
	