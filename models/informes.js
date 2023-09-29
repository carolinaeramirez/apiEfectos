const { DataTypes } = require("sequelize")

module.exports=(sequelize, type)=>{
    return sequelize.define("informe", {
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement: true        },
            casoLegajo: {
                type: DataTypes.INTEGER, allowNull: false
            },
            nombre: {type: DataTypes.STRING},
            // archivo: {
            //     type: DataTypes.BUFFER
            // }
            
    })
}

