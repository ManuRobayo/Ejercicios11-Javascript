let fecha = prompt('Ingresa fecha: ');
 
let fecha_cadena = new Date(fecha);
 
let meses =  [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
];
 
  let dia = fecha_cadena.getDate();
  let mesIndex = fecha_cadena.getMonth();
  let ano = fecha_cadena.getFullYear();
 
   let resultado = dia + ' ' + meses[mesIndex] + ' ' + ano;
   alert(resultado)