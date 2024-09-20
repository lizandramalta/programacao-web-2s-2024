function dividir(a,b){
    return b === 0 ? null : Number(a)/Number(b);
}

function multiplicar(a,b){
    return Number(a)*Number(b)
}

function somar(a,b){
    return Number(a)+Number(b)
}

function subtrair(a,b){
    return Number(a)-Number(b)
}

module.exports = {
    dividir,
    multiplicar,
    somar,
    subtrair
}