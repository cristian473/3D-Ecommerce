const Category = (sequelize, S) => {
    const C = sequelize.define("product", {
        categoryId: {
            type: S.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        name: { type: S.STRING, allowNull: false },
        subCategory: { type: S.STRING, allowNull: true },
        urlCategory: { type: S.STRING, allowNull: true },
        urlSubCategory: { type: S.STRING, allowNull: true },
        route: {
            type: S.VIRTUAL,
            get() { return "/category/" + this.getDataValue("urlCategory"); },
        },
        routeSubCategory: {
            type: S.VIRTUAL,
            get() {
                return { urlCategory } + "/" + this.getDataValue("urlCategory");
            },
            description: { type: S.TEXT },
        }
    });

    C.addHook("beforeValidate", (category) => {
        category.urlCategory = category.name.replace(/\s+/g, "_").replace(/\W/g, "");
        category.urlSubCategory = category.subCategory.replace(/\s+/g, "_").replace(/\W/g, "");
    });

    return C;
};

module.exports = Category;