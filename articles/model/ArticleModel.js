import { Sequelize, Model, DataTypes } from "sequelize";

class ArticleModel extends Model {};

ArticleModel.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    modelName: "Article",
});

export default ArticleModel;