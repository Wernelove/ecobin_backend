# Inicializando o Projeto Ecobin Backend

Passos para rodar o projeto :

O projeto foi criado em node utilizando as seguintes dependências:
- express
- cors
- nodemon
- mysql2

## Comandos

Para rodar o projeto necessita roda os seguintes comandos:

### `npm install express`

Para instalar o framework express, que irá criar o servidor web.

### `npm install cors`

Para instalar a biblioteca cors para que sirva de middleware, e administre disponibilizacao de dados
JSON no servidor web para leitura.

### `npm install nodemon`

Para instalar a biblioteca mysql2 para que seja realizada conexao com o banco de dados MySQL.

### `yarn start` ou `npm start`

O projeto irá rodar, na porta 8800.
Abra [http://localhost:8800](http://localhost:8800) e adicione uma das rotas criadas no arquivo users.js no diretorio routes 
para visualizar alguma das requisicoes ao banco criada e entao sera disponibilizado os dados em formato JSON.

