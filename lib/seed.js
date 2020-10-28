// TODO
/*
This seed file gets a list of my current public repositories and uses the Schema
I've defined to seed a database with them.
Specificaly, I'm relying on creating README files that map to my Schema well 
to create descriptive and powerful summaries of my projects for my portfolio automatically.

Step 1: Use github API to get access to all my public Repos
Step 2: Scan each repo for a README document
Step 3: If no README document is found, store a more basic template of the repo
Step 4: Generate a list that matches the fields of my defined schema
Step 5: Connect to db and seed it with the resulting file. 



const axios = require('axios');
axios.get("https://api.github.com/users/digitalfences/repos", {
    headers: {
        "Accept": "application/vnd.github.v3+json"
    }
})
    .then(res => {
        console.log(res.data);
    })
    .catch(e => {
        console.log(e.message);
    })

*/

console.log(process.env.DB_URL);