function Monstruo(energia, poderataque, raza, nivel) {
	//this.nombre = nombre;
	this.energia = energia;
	this.poderataque = poderataque;
	this.raza = raza;
	this.nivel = nivel;	
}

function Heroe(energia, poderataque, raza, experiencia; nivel) {
	//this.nombre = nombre;
	this.energia = energia;
	this.poderataque = poderataque;
	this.raza = raza;
	this.experiencia = experiencia;
	this.nivel = nivel;
}

function Pocion(energia_que_recupera) {
	//this.nombre = nombre;
	this.energia_que_recupera = energia_que_recupera;	
}

Heroe.prototype.descontarEnergia = function(descontarEnergia) {
	var energia_residual_heroe = this.energia - descontarEnergia;
	this.energia = energia_residual_heroe;
	console.log('Energia heroe: ' + energia_residual_heroe);
	if (energia_residual_heroe < 0) {
		console.log ('Heroe se murio');
	}
}

Monstruo.prototype.descontarEnergia = function(descontarEnergia) {
	var energia_residual_monstruo = this.energia - descontarEnergia;
	this.energia = energia_residual_monstruo;
	console.log('Energia monstruo: ' + energia_residual_monstruo);
	if (energia_residual_monstruo < 0) {
		console.log ('Heroe mato monstruo');
		aumento_experiencia_heroe ();
	}
}

Heroe.prototype.aumento_experiencia_heroe = function() {
	var experiencia_heroe = this.experiencia*10;
	this.experiencia = experiencia_heroe;
	console.log('Experiencia heroe: ' + experiencia_heroe);
	var factorNivel = Math.floor(experiencia_heroe/1000);
	if ( factorNivel>= 1 ) {
		 var nuevoNivel = factorNivel*this.nivel;
		 this.nivel = nuevoNivel; 
		 var poderataque = this.poderataque*nuevoNivel;
		var energia = this.energia*this.nivel;
	}
}

