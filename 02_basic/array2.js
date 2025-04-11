const marvel_heros=["thor","spiderman","ironman"]
const dc_heros=["superamn","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros);
console.log(marvel_heros[3][2]);

marvel_heros.concat(dc_heros)//returns the array without modifying the array
console.log(marvel_heros);

const allHeros=marvel_heros.concat(dc_heros)
console.log(marvel_heros);

//spread
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[1,2,4]]]
console.log(another_array);
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("himanshee"));//false
console.log(Array.from("Himanshee"));
console.log(Array.from({name:"himanshee"}));// it returns an empty array //intersecting

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));





