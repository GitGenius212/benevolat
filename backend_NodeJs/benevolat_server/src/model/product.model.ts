import { Sequelize, DataTypes, Model } from 'sequelize';
//The connection with Squelize==========================
const sequelize = new Sequelize('benevolatDB', 'root', 'test', {
    host: 'localhost',
    dialect: 'mysql', 
    port : 3307 
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

export default class Product extends Model {
    ProductID! : number;
    name! : string;
}

Product.init(
  {
    // Model attributes are defined here
    ProductID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT(2),
        allowNull: false
      },
    photo: {
        type: DataTypes.BLOB('long'), 
        // allowNull defaults to true
        get() {
          return this.getDataValue('photo')?.toString('base64');
          //<img  src="data:image/jpeg;base64,{{product.photo}}" alt="Photo of {{product.name}}"/>
        }
    },
    status: {
        type: DataTypes.ENUM, 
        values: ['ELECTRONICS', 'FASHION', 'FOOD', 'HOME', 'HOBBIES', 'HEALTH_BEAUTY', 'AUTOMOTIVE', 'BOOKS_MEDIA', 'HOUSEHOLD_APPLIANCES', 'GAMES'],
        allowNull: false,
    },
},
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Product', // We need to choose the model name, 
    freezeTableName: true, 
    timestamps: false
  },
);

 Product.sync()
 .then(() => {
    console.log('The table for the Product model was connected!');
 })
 .catch(() => {
    console.log('Unable to connect to the database');
 });


// the defined model is the class itself
//console.log(Product === sequelize.models.Product); // true

