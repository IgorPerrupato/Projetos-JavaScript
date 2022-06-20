

parsein

//Desafio 1
let line = gets(11,7).split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A+B ; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);


 
 function clicou(){
     document.getElementById("Agradecimento").innerHTML = "<b>Obrigado pro clicar</b>";
     //console.log(document.getElementById("Agradecimento"));
 
}

function redirecionar(){
    window.open("https://ge.globo.com/");  
   // window.location.href = "https://ge.globo.com/";
}
    
function trocar(elemento){
    //alert("Trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado pro passar o mouse"
    elemento.innerHTML = "Obrigado pro passar o mouse";
}
 
function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"

}


function load(){
    alert("Pagina carregada");
}


function funcaochance(elemento){
    console.log(elemento.value);
}

 
 /*function soma(n1, n2){
    return n1+n2;
 }
 /*
 var validar;
 function validaidade(idade){
    validar;
     if (idade >=18){
        validar = true
     }else{
         validar = false
     }
     return validar;
 }

var idade = prompt("Qual sua idade?");
(validaidade(idade));
console.log(validar);
 
   //   alert(soma(5, 10));





/*var d = new Date();
alert(d.getMonth()+1);
*/



/*
var count;
for(count=0; count <=5; count ++){
alert(count);
};
*/

/*
var count = 0;
while (count <=5){
    console.log(count);
    count = count + 1;
};

*/

/*
var idade = prompt("Qual é a sua idade?");
if (idade >=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*
var frutas = [{nome: "maça ", cor: " vermelha"},{nome: "uva ", cor:"roxa "}]
console.log(frutas);
alert(frutas[1].nome);
*/


//var fruta = {nome: "maça ", cor: " vermelha"}
//console.log(fruta.nome + fruta.cor);
//alert(fruta.cor);
 

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva")
//lista.pop()

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - ")); 

//var nome ="Igor Perrupato";
//var idade = 27;
//var idade2 = 28;
//var frase ="Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2)
//console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));