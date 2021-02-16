let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

window.onLoad = () => {
    
    //Choose a random index
    let firstWord = Math.floor((Math.random() * who.length) + 0);
    let secondWord = Math.floor((Math.random() * what.length) + 0);
    let thirdWord = Math.floor((Math.random() * when.length) + 0);
    
    let str = who [firstWord] + ' ' + what[secondWord] + ' ' + when[thirdWord] + '.'
    let sentence = str.toString().charAt(0).toLocaleUpperCase() + str.slice(1);

    let container = document.getElementById('excuse');
    container.innerHTML = sentence;         
}