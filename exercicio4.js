// --- Conversor de Moedas ---

//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = "5,50";

function converterParaReal(valorDolar) {

let resultado = valorDolar * taxaDolar;

return resultado;

}

console.log("O valor convertido é de : R$ " + resultado);

const transacao = {

usuario: "Carlos",

valor: "100,00",

concluida: true,

};

const valorFinal = converterParaReal;

if (transacao.concluida == "sim") {

console.log("O valor convertido para " + transacao.usuario + " é: " + valorFinal);

}

if (transacao.concluida == "não") {

console.log("Erro no processamento.");

}

// --- Conversor de Medidas de Fábrica ---

const mlPorLitro = "1000";

function converterMlParaLitro(quantidadeMl) {

const resultado = quantidadeMl * mlPorLitro;

return resultado;

}

function converterLitroParaMl(quantidadeLitros) {

const resultado = quantidadeLitros + mlPorLitro;

return resultado;

}

const producaoDia = {

lote1: 5000, // ml

lote2: 2, // litros

};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);

const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");

console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");

console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");

const estoqueBaixo = true;

if ((producaoDia.lote1 = 0)) {

console.log("Atenção: Estoque zerado!");

}