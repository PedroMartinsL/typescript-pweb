import * as readline from 'readline';

async function advinheNumero() {
    let attempts = 0;
    const max: number = 100;
    const min: number = 1;
    const sorted = Math.floor(Math.random() * (max - min + 1)) + min;

    while (true) {
        const attempt = await new Promise<string>((resolve) => {
            rl.question('Tente um número: ', resolve);
        });
        
        if (Number.parseInt(attempt) == sorted) {
            console.log("Acertou, depois de %d tentativas", attempts)
            rl.close();
            break;
        }
        console.log("Infelizmente o número sorteado foi diferente")
        attempts++;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

advinheNumero();

