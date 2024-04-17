import { NivelEducativo } from "./aprendiz.js";
import { Aprendiz } from "./aprendiz.js";

export const ap = new Aprendiz("Juan Pablo","Reyes Gomez","avatar.png",30,NivelEducativo.POSGRADO)

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;


mostrarDatosAprendiz(ap);

function mostrarDatosAprendiz(aprendiz: Aprendiz):void{
    let tbodyAprendiz=document.createElement("tbody");
    tbodyAprendiz.innerHTML=`
    <tr><td colspan=2></td><img src="./${aprendiz.avatar}" height="100"></tr>
    <tr><td>Nombres:</td> <td>  ${aprendiz.nombres}</td></>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></>
    `
    aprendizTable.appendChild(tbodyAprendiz);
}
