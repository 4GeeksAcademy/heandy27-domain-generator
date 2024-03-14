/* eslint-disable no-console */
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];




for (let p in pronoun) {
    for (let a in adj) {
         for (let n in noun) {
         // console.log(pronoun[p]+adj[a]+noun[n]+extension[Math.floor(Math.random() * 3) + 1]);
        }
    }
}


for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
            console.log(pronoun[p]+adj[a]+noun[n]+extension[Math.floor(Math.random() * 3) + 1]);
        }
    }
}

/*
for (let e in extension) {
   console.log(pronoun[p]+adj[a]+noun[n]+extension[e]);
  }
  */