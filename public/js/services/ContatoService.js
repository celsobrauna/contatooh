angular.module('contatooh').factory('Contato', function($resource) {
	
    //modulo resource: trabalhar com REST endpoints
	return $resource('/contatos/:id');
});