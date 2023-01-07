function encriptar(){
    var texto = document.getElementById("inputText").value;
    var mayusculas = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:."`;.,áéíóúàèìòù']/g;
 
     if(texto == ""){
 
         alert("No has ingresado nada para encriptar");
     }
     else if(texto.match(mayusculas) != texto.match(mayusculas)){
 
         alert("No puede ingresar letras mayúsculas");
     }
     else if(texto.match(caracteres) != texto.match(caracteres)){
 
         alert("No puede ingresar carácteres");
 
     }else{
         var txtCifrado = texto.replace(/e/igm, "enter");
         var txtCifrado = txtCifrado.replace(/i/igm, "imes");
         var txtCifrado = txtCifrado.replace(/a/igm, "ai");
         var txtCifrado = txtCifrado.replace(/o/igm, "ober");
         var txtCifrado = txtCifrado.replace(/u/igm, "ufat");
 
 
         document.getElementById("imgRight").style.display = "none";
         document.getElementById("texto").style.display = "none";
         document.getElementById("texto1").innerHTML = txtCifrado;
         document.getElementById("copiar").style.display = "show";
         document.getElementById("copiar").style.display = "inherit";
     }
 }
 
 function desencriptar(){
     var texto = document.getElementById("inputText").value;
     var mayusculas = /[A-Z]/g;
     var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
 
     if (texto == "") { 
   
         alert("No has ingresado nada para desencriptar");
     }
     else if(texto.match(mayusculas) != texto.match(mayusculas)){
         
         alert("No puede ingresar letras mayúsculas")
     }
     else if(texto.match(caracteres) != texto.match(caracteres)){
         
         alert("No puede ingresar carácteres");
     }else{
 
         var txtCifrado = texto.replace(/enter/igm, "e");
         var txtCifrado = txtCifrado.replace(/imes/igm, "i");
         var txtCifrado = txtCifrado.replace(/ai/igm, "a");
         var txtCifrado = txtCifrado.replace(/ober/igm, "o");
         var txtCifrado = txtCifrado.replace(/ufat/igm, "u");
 
         
         document.getElementById("imgRight").style.display = "none";
         document.getElementById("texto").style.display = "none";
         document.getElementById("texto1").innerHTML = txtCifrado;
         document.getElementById("copiar").style.display = "show";
         document.getElementById("copiar").style.display = "inherit";
 
     }
 }
 function copiar(){
     var contenido = document.querySelector("#texto1");
     contenido.select();
     document.execCommand("copy");
     alert("Texto copiado en portapapeles")
 }