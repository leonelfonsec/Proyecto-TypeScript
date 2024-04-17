import { NivelEducativo } from "./aprendiz.js";
import { Aprendiz } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("practicas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
    new Curso("pruebas automatizadas", 25, 50, false, 2020),
    new Curso("principios de diseño y arquitectura", 30, 75, true, 2020)
];
export var ap = new Aprendiz("Juan Pablo", "Reyes Gomez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n    <tr><td colspan=2></td><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></tr>\n    <tr><td>Nombres:</td> <td>  " + aprendiz.nombres + "</td></>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></>\n    ";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certifficados</b></td><td>" + numeroCertificados + "</td>";
    estadisticasTable.appendChild(trElement);
}
