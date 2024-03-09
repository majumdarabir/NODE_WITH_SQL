module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define("Quiz", {
        Question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marks: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Quiz
}