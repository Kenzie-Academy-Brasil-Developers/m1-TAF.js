// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (gender === "male") { //Se o candidato for homem.
    if (height >= 1.70) { //autura maxima de 1.70.
        if (barReps >= 6 || barSeconds >= 15) { //repetições de barra ou segundos na barra. 
            if (abs >= 41) { //repetições de barra ou segundos na barra. 
                if ((runDistance >= 3 * 1000 && runTime <= 12 * 60) || (runDistance >= 5 * 1000 && runTime <= 20 * 60)) { //distancia da corrida comparado com o tempo do percurso.
                    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) { //distancia comparado com tempo de nataçao e tempo de mergulho.
                        passed = true; //se todas as informaçoes a cima forem corretas o condidato passa
                    }
                }
            }
        }
    }
} else if (gender === "female") { //Se o candidato for mulher.
    if (height >= 1.60) { //autura maxima de 1.70.
        if (barReps >= 4 || barSeconds >= 12) { //repetições de barra ou segundos na barra. 
            if (abs >= 41) { //repetições de barra ou segundos na barra. 
                if ((runDistance >= 4 * 1000 && runTime <= 15 * 60) || (runDistance >= 6 * 1000 && runTime <= 22 * 60)) { //distancia da corrida comparado com o tempo do percurso.
                    if ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) { //distancia comparado com tempo de nataçao e tempo de mergulho.
                        passed = true; //se todas as informaçoes a cima forem corretas o condidato passa.
                    }
                }
            }
        }
    }
}
/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
