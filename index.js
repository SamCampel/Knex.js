var database = require('./database');

/*var dados = [
    {
        name: "Oléo",
        preco: 9.67
    },
    {
        name: "Maionese",
        preco: 7.0
    },
    {
        name: "Pão de forma",
        preco: 8.50
    }
]

// insert

database.insert(dados).into("produtos").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});*/

/* select

database.select().table('produtos').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/

/* nested queries

database.insert({name: "Farinha", preco: 2.5}).into("produtos").then(data => {
    database.select(["id", "preco"]).table('produtos').then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    });
}).catch(err => {
    console.log(err)
});*/

/* where

database.select()
// dica, não misturar mais de um WHERE para ter mais controle sobre a query

    //.where({name: "Farinha"})
    //.orWhere({id: 2})
    .whereRaw("name = 'Farinha' OR preco < 7")
    .table("produtos").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
});*/

/* RAW, querys cruas

database.raw("SELECT * FROM produtos").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
*/
/* delete

database.where({id: 3}).delete().table("produtos").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
*/

/* update

database.where({id : 10}).update({preco: 16.0}).table("produtos").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

// order by
database.select('*').table("produtos").orderBy("preco", "desc").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

// relacionamento entre tabelas
database.insert({
    nome: "arrozbom",
    produto_id: 2
}).table("marcas").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

// join
// inner join

database.select(["produtos.*", "marcas.nome as nome_da_marca"])
    .table("produtos").innerJoin("marcas", "produtos.id", "marcas.produto_id")
        .where("produtos.id",2).then(data => {
            console.log(data)
}).catch(err => {    
    console.log(err)
});*/

