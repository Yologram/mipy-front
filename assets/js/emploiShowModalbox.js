'use strict'
var emploi = function(){

	$('body').on('click','.rl-grobouton',function(){
		$('.rl-modal').show();

	});

	$('body').on('click','.rl-fermeture', function(){
		$('.rl-modal').hide();
	});

	$('body').on('click','.rl-envoyer', function(){
		$('.rl-modal').hide();
	});

	$('body').on('click','.rl-croix', function(){
		$('.rl-modal').hide();
	});

/*Ouverture et fermeture de la modalbox à l'aide des boutons*/

};

module.exports = emploi;