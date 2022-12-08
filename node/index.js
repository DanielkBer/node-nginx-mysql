const express = require("express");
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Daniel Bernardi');`
connection.query(
    sql
);

app.get('/', (req, res) => {

    var result = 'teste';
    connection.query(
        'SELECT * FROM `people`;',
        function(err, results, fields) {
            var a = '';
            for(let person of results){
                a = a.concat("<br/><p>Nome: " + person.name + "</p><br/>")
            }
            res.send('<h1>Full Cycle</h1><br/><strong>Lista das pessoas.</strong><br/>' + a)
        }
    );
    connection.end()

})

app.listen(port, () => {
    console.log('Rodando a porta ' + port);
});