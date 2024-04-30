/* 1. Crie uma função de soma que precisará ter como resultado um número par. Para isso, você precisará criar os seguintes callbacks:
- callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação foi concluída com sucesso e que o número somado é par (resultado da soma).
- callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou, trazendo um número impar (resultado da soma). */

const soma = (n1, n2, sucessoCb, erroCb) => {
    const resultado = n1 + n2;
    if (resultado % 2 === 0) {
        sucessoCb("O número somado é par: " + resultado);
    } else {
        erroCb("O número somado é impar: " + resultado);
    }
}
const impar = (n) => {
    console.log(n);
}

const par = (n) => {
    console.log(n);
}
soma(10, 20, par, impar)
