module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define("Post",{
        Title:{
            type:DataTypes.STRING,
            allowNull : false
        },
        Desc:{
            type:DataTypes.STRING,
            allowNull:false
        },
        UserId :{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return Post
}