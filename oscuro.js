function modo() {
	var boton = document.getElementById("btn");
	var contenido = document.getElementById("fondo")

	if(boton.className === "boton_oscuro") {
		boton.classList.add('boton_normal');
		contenido.classList.add('fondo_oscuro');

		document.getElementById("texto").style.color = "#FFF";

		document.getElementById("flecha_arriba").style.backgroundColor = "#FFF";
	}
	else {
		boton.classList.remove('boton_normal');
		contenido.classList.remove('fondo_oscuro');

		document.getElementById("texto").style.color="#000";

		document.getElementById("flecha_arriba").style.backgroundColor = "#000";
	}
}