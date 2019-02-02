module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.STRING,
      description: 'Full name',
    },
    last_name: {
      type: DataTypes.STRING,
      description: 'Full name',
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      description: 'Email address',
      validate: {
        isEmail: true
      }
    
    },
    zipcode: {
      type: DataTypes.INTEGER,
     
    },
    password: {
      type: DataTypes.STRING,
      description: 'password',
    },
    // classMethods: {
    //   associate: function (models)
    //   {
    //     User.hasmany(models.Movie)
    //   }
    // }
  });
  return User;
};
