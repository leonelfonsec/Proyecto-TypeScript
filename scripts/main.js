import { NivelEducativo } from "./aprendiz.js";
import { Aprendiz } from "./aprendiz.js";
export var ap = new Aprendiz("Juan Pablo", "Reyes Gomez", "avatar.png", 30, NivelEducativo.POSGRADO);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n    <tr><td colspan=2></td><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></tr>\n    <tr><td>Nombres:</td> <td>  " + aprendiz.nombres + "</td></>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></>\n    ";
    aprendizTable.appendChild(tbodyAprendiz);
}
