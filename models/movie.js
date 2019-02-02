module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
      email: {
        type: DataTypes.STRING,
        description: 'email',
        primaryKey: true,
      },
      film_name: {
        type: DataTypes.STRING,
        description: 'Film name',
      },
      film_trailer: {
        type: DataTypes.STRING,
        description: 'URL',
      }
      // classMethods: {
      //   associate: function (models)
      //   {
      //     User.hasmany(models.Movie)
      //   }
      // }
    });
    return Movie;
  };