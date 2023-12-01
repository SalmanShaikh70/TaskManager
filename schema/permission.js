let {sequelizeCon,Model,DataTypes} = require("../init/dbConfig")
// sequelizeCon.sync({alter : true})
class Permission extends Model{}
Permission.init({
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    tableName : "permission",
    modelName : "Permission",
    sequelize : sequelizeCon
})

module.exports = {Permission}

