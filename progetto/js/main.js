/* Crea la barra dei menu
 * Parametri:
 *	active: stilizza uno dei bottoni del menu in modo differente.
 * Se impostato su zero o su un valore al di fuori della dimensione di argList
 * nessuno dei bottoni verra' stilizato.
*/
var argList = ["Arg1","Arg2","Arg3","Arg4","Arg5"];

function loadMenu(active = 0) {
	var div = document.createElement("div");
	div.setAttribute("id","menu-bar");
	var a, content;
	for(var i = 1; i <= argList.length; i++) {
		a = document.createElement("a");
		content = document.createTextNode(argList[i-1]);
		a.appendChild(content);
		a.href = "./page" + i + ".html";
		if(i == active) {
			a.classList = "element select";
		} else {
			a.classList = "element";
		}
		div.appendChild(a);
	}
	document.getElementById("main-page").appendChild(div);
}