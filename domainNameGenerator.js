/* eslint-disable no-console */
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];


/*

for (let p in pronoun) {
    for (let a in adj) {
         for (let n in noun) {
         // console.log(pronoun[p]+adj[a]+noun[n]+extension[Math.floor(Math.random() * 3) + 1]);
        }
    }
}
*/


for (let pronoun = 0; pronoun < pronoun.length; pronoun++) {
    for (let adj = 0; adj < adj.length; adj++) {
        for (let noun = 0; noun < noun.length; noun++) {
            console.log(pronoun[pronoun]+adj[adj]+noun[noun]+extension[Math.floor(Math.random() * 3) + 1]);
        }
    }
}
