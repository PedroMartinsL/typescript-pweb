type Carro = {
    marca: String,
    modelo: String,
    ano: number
}

function specifiedFabrication(carros: Carro[]) {
    const period = 2021;
    return carros.filter((carro) => carro.ano >= period);
}

let carros: Carro[] = [
    {
        marca: "Volkswagen",
        modelo: "Jetta",
        ano: 2021
    },
    {
        marca: "Volkswagen",
        modelo: "T-Cross",
        ano: 2022
    },
    {
        marca: "Fiat",
        modelo: "Pulse",
        ano: 2020
    },
    {
        marca: "Ford",
        modelo: "F-4000",
        ano: 1990
    }
]

console.log(specifiedFabrication(carros))