/* Crea la barra dei menu
 * Parametri:
 *	active: stilizza uno dei bottoni del menu in modo differente.
 * Se impostato su zero o su un valore al di fuori della dimensione di argList
 * nessuno dei bottoni verra' stilizato.
*/
var argList = ["Home Page","Poèmes d’amour","Poèmes sur le temps qui passe","Poèmes sur la nature"];

function loadMenu(active = 0) {
	var div = document.createElement("div");
	div.setAttribute("id","menu-bar");
	var a = document.createElement("a");
	var content = document.createTextNode(argList[0]);
	a.appendChild(content);
	a.href = "./index.html";
	if(active == 1) {
		a.classList = "element select";
	} else {
		a.classList = "element";
	}
	div.appendChild(a);
	for(var i = 2; i <= argList.length; i++) {
		a = document.createElement("a");
		content = document.createTextNode(argList[i-1]);
		a.appendChild(content);
		a.href = "./page" + (i-1) + ".html";
		if(i == active) {
			a.classList = "element select";
		} else {
			a.classList = "element";
		}
		div.appendChild(a);
	}
	document.getElementById("main-page").appendChild(div);
}