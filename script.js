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
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});