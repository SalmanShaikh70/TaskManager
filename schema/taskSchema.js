let {sequelizeCon,Model,DataTypes} = require("../init/dbConfig")
// sequelizeCon.sync({alter : true})
class Task extends Model{}
Task.init({
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey :true
    },
    task_name : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    discription :{
        type : DataTypes.STRING(500),
        allowNull : false
    },
    assign_task_to : {
        type  : DataTypes.INTEGER,
        allowNull : true
    },
    status : {
        type : DataTypes.STRING(100),
        allowNull : true
    },
    created_by : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    updated_by : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    is_active : {
        type : DataTypes.INTEGER(1),
        defaultValue : true
    },
    is_deleted : {
        type : DataTypes.INTEGER(1),
        defaultValue : false
    }
},{
    tableName : "task",
    modelName : "Task",
    sequelize : sequelizeCon
})

module.exports = {Task}