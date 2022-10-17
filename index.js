require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodySanitizer = require('./app/middlewares/bodySanitizer');

const port = process.env.PORT || 3000;

const app = express();

/* It allows the server to accept requests from any origin. */
app.use(cors({origin: true}));


/* It's a middleware that sanitize the body of the request. */
app.use(express.urlencoded({ extended: true }));
app.use(bodySanitizer);

// Ici on récupère notre middleware de routage qui est ce coup-ci stocker dans un fichier index.js d'un dossier nomé "routers"
app.use(router);

app.listen(port, _ => {
    console.log(`http://localhost:${port}`);
});