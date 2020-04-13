const mysql = require('mysql') 
const { promisify } = require('util')
const { database } = require('./keys') 
const pool = mysql.createPool(database)

pool.getConnection((err, connection) => {
    if (err) {
        if (error.code == 'PROTOCOL_CONNECTION_LOST') {
            console.error('LA CONEXIÓN A LA BASE DE DATOS FUE CERRADA')
        }
        if (error.code == 'ER_CON_COUNT_ERROR') {
            console.error('LA BASE DE DATOS TIENE MUCHAS CONEXIONES')
        }
        if (error.code == 'ECONNREFUSED') {
            console.error('LA CONEXIÓN A LA BASE DE DATOS FUE RECHAZADA')
        }            
    }

    if (connection) connection.release()
    console.log('DB is Connected')
    return
})

//Promisify convierte a promesas lo que antes eran coolbacks
pool.query = promisify(pool.query)

module.exports = pool