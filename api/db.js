import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: "ec2-54-208-1-61.compute-1.amazonaws.com",
    user: "ecobin",
    password: "projetoecobin20235p",
    database: "ecobin_01",
    port: 3306,
});