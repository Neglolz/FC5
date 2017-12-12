/**
 * Created by johnnyribeiro on 28/11/2017.
 */
module.exports = ( sequelize, DataTypes) => {
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  })
}
