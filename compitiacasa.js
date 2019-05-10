/*
modificare il tema, nascondere tutte le voci del menu e lasciare una creata da noi chiamata come ci pare
che fa colpito il path, nonsochecazzofare venga richiamato un components e in questa pag vengano fatte tutte
le 4 fondamentali aritmetiche + operazioni sulle stringhe +in 2 textarea nome cognome al press su button venga
fuori ciao nomecognome,   un altra voce di menu (quindi un akltro path) dove ci sia un BEL Fform di registrazione dove
il tasto REGISTRA esca quando TUTTI i campi sono compilati, un altra pag dove venga riprodotto un video di pornhub

tutte queste cose avranno un modulo ma nessun service!!

IN ULTIMO voce di menu /init farà all'apertura della pag implements oninit venga preso un dato da db!!
*/

/*
directive (DA APPROFONDIRE) le directive sono uguali ai componenti
le direttive creano attributi, (ngfor/ngif è una direttiva)

*/

//--> GUIDA AGLI ESERCIZI DI SOPRA;

/*
- Abbiamo scelto come voce nel menu FORMS commentando il resto nella pages-menu.ts;
- sulla FORMS-ROUTING-MODULE.TS posso cambiare i nomi dei path;
- Nelle sottovoci sono usati BUTTONS e FORM-LAYOUT rispettivamente per Operazioni e Registrazione;
- Come prima cosa nella FORM-LAYOUTS.HTML vado a cambiare le voci con nome cognome ecc...
  ho commentato i vecchi così da poter ripristinare tutto;
- Strutturati campi e bottoni andiamo a dare id ai bottoni e alle text area quindi (click) = nomefunzione
  e andiamo nel BUTTONS.COMPONENTS.TS a fare le funzioni di addizione,sottra ecc.
- Cambiamo il path in PAGES-MENU.TS di buttons e dell'altro forms.routing.modules.ts

*/

const a = [1,3,6,2,9];
const b = [5,4,7,8,9,3,"2"];

const c = function(b){
  console.log(b);
};
c(new Set(a.concat(b).sort()));

// ////////////////////////////////////////////////////////////
// var myMap = new Map();
// myMap.set("nome", "Mario");
// myMap.set(3.14, "Pi greco");
// var myObj = {id: 123, data: "test"};
// myMap.set(myObj, "Oggetto");
// console.log(myMap);
/*Un Set può contenere dati di qualsiasi tipo ma senza duplicati, col Map creare mappe associative che ci consentono
di abbinare un valore ad una chiave.*/


//CONTROLLO X IL NOME
var str = 'cia3o'
var stre =  str.split('')
Number(stre)

stre.map((v)=>{
  if(isNaN(v) === true) console.log('ok');
  else{
  // console.log("nok");
  //   };
  // console.log(v);
})

//CONTROLLO MAIL

function controllaEmail() {
    var email = document.getElementById('campo_email');
    var filtro = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filtro.test(email.value)) {
        alert('Attenzione, indirizzo email non valido');
        return false;
    }
}

var obj = {
  name    : 'fede',
  surname : 'farky',
  mail    : 'gino@gino.com',
  age     : 25
}
function objj(){
  if (typeof(obj.name) === 'string' && typeof(obj.surname) === 'string'){
     obj.name = 'ok';
     obj.surname = obj.name.split('');
  }
  if (obj.mail != /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/){
    obj.mail = 'email non valida'
  };
  if (typeof(obj.age) != 'number') return 'NOK'
}

objj()
console.log(obj);
