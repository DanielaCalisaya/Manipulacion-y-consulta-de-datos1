module.exports = (sequelize, dataTypes) => {

    const alias = "Movie"; /* define como quiero llamar al modelo */

    const cols = {
       id:{
           type: dataTypes.INTEGER(10).UNSIGNED,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
       },
       title: {
           type: dataTypes.STRING(500),
           allowNull: false
       },
       rating: {
           type: dataTypes.DECIMAL(3,1).UNSIGNED,
           allowNull: false
       },
       awards: {
           type: dataTypes.INTEGER(10).UNSIGNED,
           allowNull: false,
           defaultValue: 0
       },
       release_date: { /* ----------------- */
           type: dataTypes.DATETIME,
           allowNull: false
       },
       length: {
           type: dataTypes.INTEGER(10).UNSIGNED,
           defaultValue: null
       },
       genre_id: { /* ---------------------- */
           type: dataTypes.INTEGER(10).UNSIGNED,
           foreignKey: true,
           defaultValue: null
       }
    };

    const config = {
        tableName: "movies", /* podrias no ponerlo pero para no tener problemas ponemos el nombre de la columna */
        createdAt: "created_at",
        updatedAt: "updated_at"
    };

    const Movie = sequelize.define(alias, cols, config)



    return Movie;
} 