function Veiculo(modelo, cor, placa) {
    this.modelo = modelo,
    this.cor = cor

    let _placa = placa

    this.getPlaca = function () {
        return _placa
    }

    this.setPlaca = function (numeracaoPlaca) {
        if (typeof numeracaoPlaca === 'string') {
            return _placa = numeracaoPlaca
        }
    }

    this.tempoAte100km = function () {
        return
    }
}

function Carro(modelo, cor, placa) {
    Veiculo.call(this, modelo, cor, placa)

    this.tempoEmSegundosAte100km = function () {
        return 15
    }
}

function Moto(modelo, cor) {
    Veiculo.call(this, modelo, cor)

    this.tempoEmSegundosAte100km = function () {
        return 10
    }
}

function Aviao(modelo, cor, marcacao) {
    Veiculo.call(this, modelo, cor)

    let _marcacaoIdentificador = marcacao

    this.getMarcacao = function () {
        return _marcacaoIdentificador
    }

    this.setMarcacao = function (valorMarcacao) {
        return _marcacaoIdentificador = valorMarcacao
    }

    this.tempoEmSegundosAte100km = function () {
        return 45
    }
}


const carroDanilo = new Carro('Gol', 'Preto', 'RIO2A18')
console.log(carroDanilo.getPlaca());

const motoJoão = new Moto('Ninja', 'Verde')
motoJoão.setPlaca('FVD3D23')
console.log(motoJoão.getPlaca());

const AviaoDaniela = new Aviao('Azul21-1', 'Branco', 'D#334')
console.log(AviaoDaniela.getMarcacao());