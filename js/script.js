// window.addEventListener("load", start);

// Recebe os dois inputs 
let n1 = document.querySelector("#numberOne")
let n2 = document.querySelector("#numberTwo")

// Mostra o resultado 
let soma = document.querySelector("#somaTitle")
let sub = document.querySelector("#SubtraiTitle") 
let subAB = document.querySelector("#subtrai1Title")
let multiplicaAb = document.querySelector("#multiplicaTitle")
let divideAb = document.querySelector("#divideTitle")
let divideBa = document.querySelector("#divide1Title")
let aoQuadradoA = document.querySelector("#quadradoATitle")
// let divideBa = document.querySelector("#divide1Title")

// eventos 
const start = () => {
    //Soma A +B //
    n1.addEventListener("change", numero1)
    n2.addEventListener("change", numero1)
}


const numero1 = () => {
    result()
}

const numero2 = () => {
    result()
}

//Soma A + B //
const somaAb = (numA, numB) => {
    let soma = numA + numB;

    return soma
}

//Subtrai A - B //
const subtraiAB = (numA, numB) => {
    let sub = numA - numB;

    return sub
}

//Subtrai B - A //
const subtraiBA = (numA, numB) => {
    let subAB = numB - numA;

    return subAB
}

//Multiplica A * B //
const multAb = (numA, numB) => {
    let multiplicaAb = numB * numA;

    return multiplicaAb
}

//Divide A / B //
const divisionAb = (numA, numB) => {
    let divideAb = numA / numB;

    return divideAb
}

//Divide A / B //
const divisionBa = (numA, numB) => {
    let divideBa = numA / numB;

    return divideBa
}

const quadradoA = (numA, numB) => {
    let aoQuadradoA = Math.pow(numA, numB)

    console.log(aoQuadradoA)
}



const result = () => {
    numA = Number(n1.value);
    numB = Number(n2.value);

    soma.value = somaAb(numA, numB)
    sub.value = subtraiAB(numA, numB)
    subAB.value = subtraiBA(numB, numA)
    multiplicaAb.value = multAb(numA, numB)
    divideAb.value = divisionAb(numA, numB)
    divideBa.value = divisionBa(numB, numA)
    aoQuadradoA.value = quadradoA(numA, numB)
}

// console.log(multAb)

start()



