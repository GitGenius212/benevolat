"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//The connection with Squelize==========================
const sequelize = new sequelize_1.Sequelize('benevolatDB', 'root', 'test', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});
//Testing the connection
// (async () => {
//     try {
//       await sequelize.authenticate();
//       console.log('Connection with Squelize has been established successfully.');
//     } catch (error) {
//       console.error('Unable to connect with Squelize to the database:', error);
//     }
//   })();
class Product extends sequelize_1.Model {
}
exports.default = Product;
Product.init({
    // Model attributes are defined here
    ProductID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT(2),
        allowNull: false
    },
    photo: {
        type: sequelize_1.DataTypes.BLOB('long'),
        // allowNull defaults to true
        get() {
            var _a;
            return (_a = this.getDataValue('photo')) === null || _a === void 0 ? void 0 : _a.toString('base64');
            //<img  src="data:image/jpeg;base64,{{product.photo}}" alt="Photo of {{product.name}}"/>
        }
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['ELECTRONICS', 'FASHION', 'FOOD', 'HOME', 'HOBBIES', 'HEALTH_BEAUTY', 'AUTOMOTIVE', 'BOOKS_MEDIA', 'HOUSEHOLD_APPLIANCES', 'GAMES'],
        allowNull: false,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product', // We need to choose the model name, 
    freezeTableName: true,
    timestamps: false
});
Product.sync()
    .then(() => {
    console.log('The table for the Product model was connected!');
})
    .catch(() => {
    console.log('Unable to connect to the database');
});
// the defined model is the class itself
//console.log(Product === sequelize.models.Product); // true
