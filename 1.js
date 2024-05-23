// Function pour additionner les nombres pair jusqu'à n donc 6 pour l'exemple.

function nbPairs(n){
    let somme =0;

    for(let i=1; i<=n;i++){
        if(i%2===0){
            somme+=i;
        }
    }
    return somme
}

console.log(nbPairs(6));

// Function pour définir si un mot est un palindrome ou non.

function palindrome (chaine){
    const chaineMinus = chaine.toLowerCase();

    const chaineInversee = chaineMinus.split('').reverse().join('')

    return chaineMinus === chaineInversee
}

console.log(palindrome('radar'));
console.log(palindrome('clément'));



// Function pour trouver le nombre le plus grand d'un tableau.

function trouverPlusGrand (tableau){
    if(tableau.length ===0){
        return undefined
    }
    let plusGrand = tableau[0];

    for(let i = 1;i<tableau.length;i++){
        if(tableau[i] > plusGrand){
            plusGrand = tableau[i]
        }
    }
    return plusGrand
}

const tab = [3,5,98,452,120,356]

const resultat = trouverPlusGrand(tab)

console.log(resultat);

// Function qui permet de compter le nombre d'occurence dans un tableau.

function compter(tableau){
    const occurences ={};

    for(let i=0;i<tableau.length;i++){
        const element = tableau[i];

        if(!occurences[element]){
            occurences[element]=1;
        } else {
            occurences[element]++
        }
    }
    return occurences
}

const tabFruit = ['pomme', 'kiwi', 'orange', 'pomme', 'kiwi', 'melon']

console.log(compter(tabFruit));

// function qui permet d'inverser les mots d'une phrase

function phraseInversee(phrase){
    const phraseMinus = phrase.toLowerCase();

    const inversee = phraseMinus.split(' ').reverse().join(' ');

    return inversee;
}
const phrase = "Salut c'est moi"

console.log(phraseInversee(phrase));

// Function qui permet de renvoyer la factorielle d'un nombre


console.log(factorielle(5));

function factorielle (n){
    if (n === 0 || n === 1){
        return 1;
    }
    let sommeFacto = 1;
    for(let i=1; i<=n; i++){
            sommeFacto*= i;
     };
     return sommeFacto;
}

console.log(factorielle(4));