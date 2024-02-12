/*
create table author (id number, name string, age number, city string, state string, country string)

1 - Crie um objeto chamado "database".
2 - Dentro do objeto "database", crie um objeto chamado "tables".
3 - Dentro do objeto "tables", crie um objeto com o nome da tabela.
4 - Dentro do objeto criado com o nome da tabela, crie um objeto chamado "columns",
 onde as chaves são representadas pelo nome da coluna e o valor pelo tipo.
5 - Dentro do objeto criado com nome da tabela, crie um array chamado "data".
6 - Exiba o conteúdo do objeto "database" utilizando JSON.stringify


*/

const statement = "create table author (id number, name string, age number, city string, state string, country string)";
const regexp = /create table ([a-z]+) \((.+)\)/;
const parsedStatement = statement.match(regexp);
const tableName = parsedStatement[1];
let columns = parsedStatement[2];
columns = columns.split(",");

const database = {
    tables: {
        [tableName]: {
            columns: {},
            data: []
        }
    }
}

for (let column of columns) {
    column = column.trim().split(" ")
        
    const name = column[0]
    const type = column[1]

    database.tables[tableName].columns[name] = type
}

console.log(JSON.stringify(database, undefined, " "));