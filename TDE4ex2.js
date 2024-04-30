/* 2. Utilize a função anterior para criar uma promise que tenha:
- then: uma mensagem de sucesso, informando que a operação foi concluída com sucesso, dizendo se é par ou ímpar e trazendo o número;
- catch: uma mensagem de erro, informando que a operação possui erro, dizendo se é par ou ímpar e trazendo o número.

Dica: Utilize uma promise com função (resolve, reject).*/

  const somaParPromise = (n1, n2) => {
    return new Promise((resolve, reject) => {
        const resultado = n1 + n2;
        if (resultado % 2 === 0) {
            resolve(`O número somado é par: ${resultado}`);
        } else {
            reject(`O número somado é impar: ${resultado}`);
        }
    });
}

somaParPromise(10, 20)
    .then(console.log)
    .catch(console.log);
