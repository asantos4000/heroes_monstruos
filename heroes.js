function Monstruo(energia, poderataque, raza) {
	//this.nombre = nombre;
	this.energia = energia;
	this.poderataque = poderataque;
	this.raza = raza;	
}

function Heroe(salud, poderataque, raza) {
	//this.nombre = nombre;
	this.energia = energia;
	this.poderataque = poderataque;
	this.raza = raza;
	this.experiencia = experiencia;
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
	var experiencia_heroe = this.experiencia*1000;
	this.experiencia = experiencia_heroe;
	console.log('Experiencia heroe: ' + experiencia_heroe);
	if (experiencia_heroe modulo 1000 >) {
		console.log ('Heroe se murio');
	}
}

--------------
Deportista.prototype.check = function(esp2) {
	
	If (espe2= this.especialidad) {
	 this.imprimir();	
	} else {

	alert ('No es su' + especialidad);
	Deportista.imprimir (especialidad);
	}
	
}
var D1 = new Deportista('10K');
var D2 = new Deportista('Posta');
var D3 = new Deportista('400 Mts Planos');



