function calcular() {
    var  numuno = document.getElementById('num1').value;
    var  numdos= document.getElementById('num2').value;
    var  numtres= document.getElementById('num3').value;
   
   if (numuno=="" && numdos=="" && numtres==""){
       alert("debe llenar almenos un espacio para que funcione");
   }
   if (numuno<numdos && numuno<numtres) {
       alert(numuno + ' es el menor de los tres numeros');
   }
  
   if (numdos<numuno && numdos<numtres) {
       alert(numdos + ' es el menor de los tres numeros');
   }
  
    if (numtres<numuno && numtres<numdos) {
       alert(numtres + ' es el menor de los tres numeros');
   }
   if (numuno == numdos && numdos == numtres) {
       alert("debe aber almenos un numero que sea mayor que los otros");
   }
  
   }
  


  
