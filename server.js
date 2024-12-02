// - Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
// - Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags(tags è un array di stringhe)
//     - Creiamo poi una rotta / bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
// - Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// - Testare su postman


const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("server del mio blog")
})

app.use(express.static("public"));


const lista = [
    post1 = {
        img: "ciambellone.jpeg",
        titolo: "ciambellone",
        contenuto: "ciambella",
        tags: ["ciambellone", "ciambella"]
    },
    post2 = {
        img: "cracker_barbabietola.jpeg",
        titolo: "cracker barbabietola",
        contenuto: "crecs",
        tags: ["cracker", "crecs"]
    },
    post3 = {
        img: "pane_fritto.jpeg",
        titolo: "pane fritto dolce",
        contenuto: "pane ",
        tags: ["pane", "fritto"]
    },
    post4 = {
        img: "pasta_barbabietola.jpeg",
        titolo: "pasta barbabietola",
        contenuto: "barbabietola",
        tags: ["pasta", "barbabietola"]
    },
    post5 = {
        img: "torta_paesana.jpeg",
        titolo: "torta paesana",
        contenuto: "torta",
        tags: ["torta", "paesana"]
    }
];
app.get("/bacheca", (req, res) => {
    res.json(lista)
})


app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});