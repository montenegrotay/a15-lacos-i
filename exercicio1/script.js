// EXERCÍCIO 01
//Utilizando o laço while, escreva um código que recebe um prompt perguntando se a pessoa deseja comer mais coxinhas. 
//“S” deve representar “sim”, e “N” deve representar “não”. 
//Crie também uma let conta para guardar o valor total.

//Toda vez que a resposta for sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total.
//Quando a resposta não for sim, devemos imprimir o valor total da cont


let coxinhas = prompt(`Você deseja comer mais coxinhas? 
Digite S para sim
Digite N para não`).toUpperCase()

let contaCoxinha = 0

while (coxinhas === "S"){
    contaCoxinha += 2.50
    coxinhas = prompt(`Você deseja comer mais coxinhas? 
Digite S para sim
Digite N para não`).toUpperCase()


}
console.log("O valor da conta é: ", contaCoxinha)

