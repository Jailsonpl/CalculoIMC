	function calcular(){	

		var peso = window.document.getElementById('peso');
		var altura = window.document.getElementById('altura');
		var res = window.document.getElementById('resultado');
		var p = Number(peso.value);
		var a = Number(altura.value);
		var imc = p/(a**2);		

		if(imc<18.5){
			res.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está abaixo do peso.`;
			document.querySelector("div#main").style.background="#F8FC3F";
		} else if(imc>=18.5 && imc<24.9){
			res.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está dentro do peso.`;
			document.querySelector("div#main").style.background="#0011FF";
		} else if(imc>=25 && imc<29.9){
			res.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está com sobrepeso.`;
			document.querySelector("div#main").style.background="#FF6E4A";
		}else if(imc>=30 && imc<34.9){
			res.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade grau 1.`;
			document.querySelector("div#main").style.background="#E1354A";
		}else if(imc>=35 && imc<39.9){
			res.innerText = `Seu IMC é de ${imc.toFixed(2)}. Você está com obesidade grau 2.`;
			document.querySelector("div#main").style.background="#C92634";
		}else{
			res.innerText = `Seu IMC é de ${imc.toFixed(2)}, Você está com abesidade grau 3 ou morbida.`;
			document.querySelector("div#main").style.background="#851C26";
		}
	}


	

	