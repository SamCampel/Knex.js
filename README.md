# Aprendendo Knex.js

Este projeto tem como objetivo aprender e praticar o uso do [Knex.js](http://knexjs.org/), uma biblioteca de query builder para Node.js. Ele inclui exemplos de operações básicas de manipulação de banco de dados, como inserção, seleção, atualização, exclusão e consultas personalizadas.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Knex.js**: Query builder para interagir com o banco de dados.
- **Banco de Dados**: O banco de dados utilizado deve ser configurado no arquivo `database.js`.

## Funcionalidades

O projeto demonstra as seguintes operações com o Knex.js:

1. **Inserção de Dados**:
   - Inserir múltiplos registros em uma tabela.
   - Inserir registros individuais.

2. **Seleção de Dados**:
   - Selecionar todos os registros de uma tabela.
   - Selecionar registros com filtros (`WHERE`, `OR`, etc.).
   - Ordenar os resultados (`ORDER BY`).

3. **Atualização de Dados**:
   - Atualizar registros específicos com base em condições.
     
4. **Exclusão de Dados**:
   - Excluir registros específicos de uma tabela.

5. **Consultas Personalizadas**:
   - Executar consultas SQL brutas (`RAW`).

6. **Consultas Aninhadas**:
   - Executar operações dependentes, como inserir um registro e, em seguida, buscar informações relacionadas.

## Estrutura do Projeto

- **`index.js`**: Contém os exemplos de operações com o Knex.js.
- **`database.js`**: Configuração do Knex.js para conexão com o banco de dados.

## Configuração

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure o arquivo database.js com as credenciais do seu banco de dados. Exemplo:
```javascript
const knex = require('knex')({
    client: 'mysql', // ou 'pg' para PostgreSQL, 'sqlite3', etc.
    connection: {
        host: '127.0.0.1',
        user: 'seu_usuario',
        password: 'sua_senha',
        database: 'nome_do_banco'
    }
});

module.exports = knex;
```

## Como Executar

1. Execute o arquivo index.js para testar as operações:
- node index.js

2. Verifique o console para os resultados das operações realizadas.
   
## Observações
Este projeto é apenas para fins de aprendizado e prática.
Certifique-se de que o banco de dados está configurado corretamente antes de executar os exemplos.
O código será atualizado à medida que novos conceitos forem aprendidos.

## Referências
- Documentação do Knex.js
- Node.js
