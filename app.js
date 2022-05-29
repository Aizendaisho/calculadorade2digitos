// document.getElementById("count-el").innerText = 0;



// let countEl = document.getElementById(`count-el`)

// let count = 0;

// function increment() {
    
//     count += 1
//     countEl.textContent = count
// }

// let numero1= 8;
// let numero2= 2;

// document.getElementById(`num1`).textContent= numero1
// document.getElementById(`num2`).textContent= numero2

// let sumEl= document.getElementById(`sum-el`);

// function sumar() {
//     let sumar = numero1 + numero2;
//     sumEl.textContent= `La suma de ${numero1} y ${numero2} es ${sumar}.`;

// }
// function restar() {
//     let restar = numero1 - numero2;
//     sumEl.textContent= `la resta de ${numero1} y ${numero2} es ${restar}`;
// }
// function multiplicar() {
//     let multiplicar = numero1*numero2
//     sumEl.textContent=`la multiplicacion de ${numero1} y ${numero2} es ${multiplicar}`;
// }
// function dividir() {
//     let dividir= numero1/numero2;
//     sumEl.textContent=`la division de ${numero1} y ${numero2} es ${dividir}`;
// }




// saveEl= document.getElementById(`save-el`)


// function save() {
//     let salvados = count + ` - `;
//     saveEl.textContent += salvados
    
// }

// function reset() {
    
//     count = 0;
//     countEl.textContent = 0;


// }


// let guardado = document.getElementById(`Guardados`);

// function save() {
//     guardado.innerText = count
// };


// let welcomeEl = document.getElementById(`welcome-el`);
// let name = `Araldi Ulises Garcia Feliz`;
// let greeting = `Hi, my name is `;
// console.log(welcomeEl)

// welcomeEl.innerText = greeting + name;

// welcomeEl.innerText= welcomeEl.innerText + ` Espero estes bien.`



// myGreeting = greeting + name +`!`
// console.log(myGreeting)

// (a = a +  b ) = (a +=b)



// let myAge = 32;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);






// let firstCard = 10;
// let secondCard= 1;
// let sum = firstCard + secondCard;
// let hasBlackJack = false;
// let isAlive = true;

// if (sum<=20) {
//     console.log(`Tienes ${sum}, quieres otra carta?`);
// }else if (sum===21) {
//     console.log(`wow! tienes ${sum} blackjack`)
//     hasBlackJack = true
// }else {
//     console.log(`tienes ${sum} es mas de 21, perdiste`);
//     isAlive = false;
// }


// console.log(isAlive)




// let age = 100;
// if (age<100) {
//     console.log(`no elegible para carta`)
// }else if (age===100) {
//     console.log(`Felicidades, aqui esta su tarjeta`)
// }else{
//     console.log(`Ya no puedes, tienes una tigueron`)
// }





let numero1= document.getElementById(`num1`)
let numero2= document.getElementById(`num2`)

numero1= numero1.textContent= parseInt(prompt(`Inserte el primer numero`));
numero2= numero2.textContent= parseInt(prompt(`Inserte el segundo numero`));
sumEl = document.getElementById(`sum-el`); 

console.log(sumEl)


function sumar() {
    let sumado = numero1+numero2
    sumEl.textContent= `la suma de ${numero1} y ${numero2} es ${sumado} `

}
function restar() {
    let restado = numero1-numero2
    sumEl.textContent= `la resta de ${numero1} y ${numero2} y ${restado}`
    

}
function multiplicar() {
    let multiplicado = numero1*numero2
    sumEl.textContent= `la multiplicacion de ${numero1} y ${numero2} de es ${multiplicado}`

}
function dividir() {
    let dividido = numero1/numero2
    sumEl.textContent=`la division de ${numero1} y de ${numero1} es ${dividido}`

}

