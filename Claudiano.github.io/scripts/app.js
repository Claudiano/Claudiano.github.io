var app = angular.module("sitePessoal", ["ngRoute"]);

app.controller("mainController", function($scope){
	$scope.nome = "Claudiano Sampaio";
	$scope.cargo = "Desenvolvedor de Software";
	$scope.foto =  "img/sampaio.jpg";

	$scope.resumo = [
		"Graduando do curso de Sistemas de Informações na instituição Unifacisa."
	];

	$scope.historico = [
		"Experiência como técnico em informática na instituição Unifacisa.", "O que mais fiz na vida."
	];

	$scope.habilidades = ["C/C++", "Java", "Python", "OpenCv"];

	$scope.ano = new Date().getFullYear();

	$scope.orcamentos = [];
	$scope.solicitarOrcamento = function(solicitacaoOrcamento){
		$scope.orcamentos.push(solicitacaoOrcamento);
		console.log($scope.orcamentos);

	}
});
