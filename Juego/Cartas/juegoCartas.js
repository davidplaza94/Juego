 "use strict";

 //FUNCIONES PARA EL PRIMER APARTADO

 //Genera el array aleatorio

 function jugar() {
 	//Dado un stirng con enteros separados por comas, obtengo un array utilizando la "," como separador.
	var numCarta1jug1 = Math.floor(Math.random()*12+1);
	 var numCarta1jug2 = Math.floor(Math.random()*12+1);
	 var numCarta2jug1 = Math.floor(Math.random()*12+1);
	 var numCarta2jug2 = Math.floor(Math.random()*12+1);
	 var IDnumCarta1jug1 = document.getElementById ("numCarta1jug1");
	IDnumCarta1jug1.innerHTML=numCarta1jug1;
	var IDnumCarta1jug2 = document.getElementById ("numCarta1jug2");
	IDnumCarta1jug2.innerHTML=numCarta1jug2;
	var IDnumCarta2jug1 = document.getElementById ("numCarta2jug1");
	IDnumCarta2jug1.innerHTML=numCarta2jug1;
	var IDnumCarta2jug2 = document.getElementById ("numCarta2jug2");
	IDnumCarta2jug2.innerHTML=numCarta2jug2;
 	var resultado = document.getElementById ("resultado"); //Elemento donde se muestra el resultado
 	
 	}
	
if(numCarta1jug1==numCarta1jug2){
	resultado.innerHTML = "Empate";
	//turno++;
	}else{
		if(numCarta1jug1>numCarta1jug2){
		resultado.innerHTML = "Ha ganado jugador 1";
		//turno++;
}	else{
		
		resultado.innerHTML = "Ha ganado jugador 2";
		//turno++;

}
	} 


if(numCarta2jug1==numCarta2jug2){
	resultado.innerHTML = "Empate";
	//turno++;
	}else{
		if(numCarta2jug1>numCarta2jug2){
		resultado.innerHTML = "Has ganado: ";
		//turno++;
}	else{
		
		resultado.innerHTML = "Has perdido";
		//turno++;

}
	}
		



