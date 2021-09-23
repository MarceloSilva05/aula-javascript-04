
//1
let valoresNumericos=[25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];
valoresNumericos.sort();
console.log(valoresNumericos);

//2
let times=["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
times.push("Flamengo");
times.shift();
times.unshift("Palmeiras");
times.push("Grêmio");
times.unshift("São Paulo",  "Santos");
times.pop();
times.sort();
console.log(times.length);
console.log(times);

//3
let atividades=["tomar café","escovar os dentes","varrer a casa",
"passar pano","fazer o almoço","estudar","escutar musica"];
let atGosta=["assistir anime","assistir filme"];
atividades.reverse();
console.log(atividades);
console.log(atividades.slice(3,4));
console.log(atividades.slice(6,7));
console.log(atividades.join(" - "));
console.log(atividades.concat(atGosta));


//4 
let cidades=["Brasília","Goiânia","Salvador","Palmas", "Curitiba"];
cidades.shift();
cidades.pop();
cidades.sort();
console.log(cidades);


