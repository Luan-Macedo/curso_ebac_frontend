function Funcionario(nome, salario, sexo){
    this.nome = nome;
    this.salario = salario;
    this.sexo = sexo;
}

function Gerente(nome, salario, sexo, uf){
    Funcionario.call(this, nome, salario, sexo);
    this.uf = uf;
}

function Estagiario(nome, salario, sexo, area){
    Funcionario.call(this, nome, salario, sexo);
    this.area = area;
}

const Pedro = new Gerente("Pedro", 5000, "M", "RJ");
const Maria = new Estagiario("Maria", 2000, "F", "Tecnologia");
const Joana = new Gerente("Joana", 4500, "F", "SP");

console.log(Pedro);
console.log(Maria);
console.log(Joana);