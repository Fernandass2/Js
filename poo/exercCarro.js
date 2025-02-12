/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author Fernanda Batista
 */

// Classe modelo (iniciar sempre com letra maiuscula)
class Carro {
    //Atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }

 //ações
    criarCarro() {
        console.log("-------------------------------------------------------")
        console.log("🚗🚘")
        console.log(`Ano do carro: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
}

    ligar() {
        console.log(`Carro da cor ${this.cor} foi ligado!`)
}

    desligar() {
        console.log("Chave fora de contato!")
}

    acelerar() {
        console.log("🚘💨  🚗💨")   
    }
}

// Classe modelo Enxada com herança e Bloco
class Aviao extends Carro{
    // Atributos
    constructor(ano, cor, envergadura){
        super(ano, cor) //super -> classe pai
        this.envergadura = envergadura
    }

    //ações
    criarAviao() {
        console.log("--------------------------")
        console.log("✈️")
        console.log(`Ano do avião: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
    }

    envergadura() {
        console.log(`Envergadura do avião é: ${this.envergadura}`)
    }

    aterrizar() {
        console.log("avião aterrizando!")
        if (this.conquista === true) {
            console.log("☀ O avião pousou!")
        }
    }

    // Polimorfismo (Sobreescrever o método existente da classe pai)
    acelerar() {
        console.log("acelerou!")
    }
}

console.clear()
// Intanciando (criando) um objeto
const Carro1 = new Carro(2017, "Vermelho")
Carro1.criarCarro()
Carro1.ligar()
Carro1.desligar()
Carro1.acelerar()

const Carro2 = new Carro(1989, "Azul")
Carro2.criarCarro()
Carro2.ligar()
Carro2.desligar()
Carro2.acelerar()

const aviao1 = new Aviao(2015, "Azul", 8,30)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelerar()





