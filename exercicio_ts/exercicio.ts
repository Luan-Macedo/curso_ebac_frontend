//saudação+nome
function olaNome(nome: string){
    return `Olá ${nome}`;
}

//multiplicação
function multiplicacao(massa: number, acelerecao: number){
    const dinamica = massa * acelerecao;
    return dinamica;
}

const nome = "Luan";
const saudacao = olaNome(nome);
console.log(saudacao);

const resultado = multiplicacao(80, 30);
console.log(resultado);
