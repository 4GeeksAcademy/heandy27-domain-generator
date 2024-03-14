let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extension = ['.com', '.net', '.us', '.io'];
let randomExtension = Math.floor(Math.random() * 3) + 1;

for (let p in pronoun) {
    for (let a in adj) {
        for (let n in noun) {
            console.log(pronoun[p]+adj[a]+noun[n]+extension[randomExtension]);
        }
    }
}

/*
for (let e in extension) {
   console.log(pronoun[p]+adj[a]+noun[n]+extension[e]);
  }
  */