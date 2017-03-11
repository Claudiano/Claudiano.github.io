var pessoa = {
	nome: "Claudiano Sampaio",
	cargo: "Desenvolvedor de Software",
	foto: "img/sampaio.jpg"
}


document.getElementById("nomeCabecalho").innerHTML = pessoa.nome;
document.getElementById("cargoCabecalho").innerHTML = pessoa.cargo;
document.getElementById("imgCabecalho").src = pessoa.foto;
