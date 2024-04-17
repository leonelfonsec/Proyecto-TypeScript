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
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "\n    <tr><td colspan=2></td><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></tr>\n    <tr><td>Nombres:</td> <td>  ").concat(aprendiz.nombres, "</td></>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></>\n    ");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certifficados</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>\n        ");
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
