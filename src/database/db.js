//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") 

module.exports = db; // exportar objeto database para aplicação

//utilizar o objeto de banco de dados para nossas operações
db.serialize(() => {

    //com comandos SQL, irei: 

    // 1 Criar uma tabela
  /*   db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `) */


    // 2 Inserir dados na tabela
  /*   const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?)
    `       
    const values = [
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "Papersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"

    
]   */     

/*             function afterInsertData(err) { // enviar os dados através da função


                if(err) {       // caso haja erro, executar:
                    return console.log(err)
                }

                console.log("Cadastrado com sucesso")
                console.log(this)
                
            }

            //caso não haja:
            db.run(query, values, afterInsertData)// chamar a função de volta (callback) (comentar linha, caso já tenha executado)
 */

    // 3 Consultar os dados da tabela
             /*    db.all(`SELECT name FROM places`, function(err, rows) {
                    if(err) {       // caso haja erro, executar:
                        return console.log(err)
                    }

                    console.log("Aqui estão seus registros")
                    console.log(rows)
                }) */

    // 4 Deletar um dado da tabela use somente em caso de erros
                 /*db.run(`DELETE FROM places WHERE id = ?`, [6], function (err) {
                    if(err) {       // caso haja erro, executar:
                        return console.log(err)
                    }

                    console.log("Registro deletado com sucesso")
                    

                })*/ 
})