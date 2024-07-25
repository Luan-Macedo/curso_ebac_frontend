const alunos = [
    {
        nome: 'Epaminondas',
        nota: 9
    },
    {
        nome: 'Gilgamesh',
        nota: 5
    },
    {
        nome: 'Nietzsche',
        nota: 6
    },
    {
        nome: 'Zaratustra',
        nota: 3
    }
]

const passouDeAno = alunos.filter(function(item){
    return item.nota >= 6;
})

console.log(passouDeAno);
