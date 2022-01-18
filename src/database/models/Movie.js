module.exports = (sequelize, dataTypes) => {

    const alias = "Movie"; /* define como quiero llamar al modelo */

    const cols = {

    };

    const config = {
        tableName: "movies" /* podrias no ponerlo pero para no tener problemas ponemos el nombre de la columna */
    };

    const Movie = sequelize.define(alias, cols, config)



    return Movie;
} 