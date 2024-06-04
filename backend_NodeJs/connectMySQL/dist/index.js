"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const body_parser_1 = __importDefault(require("body-parser"));
const product_model_1 = __importDefault(require("./model/product.model"));
const cors_1 = __importDefault(require("cors"));
const blob_util_1 = require("blob-util");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
app.use((0, cors_1.default)({ origin: 'http://localhost:4200' }));
//app.use(express.json()); // New
//Connection with mySQL-------------------------------------------------
var con = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'test',
    port: 3307
});
//Connexion à la base de données MySQL
con.connect(function (err) {
    if (err)
        throw err;
    console.log("Connected successfully to MySQL BD!");
});
//Building with Squelize-------------------------------------------------
// const jane = Product.build({ name: 'Jane' });
// console.log(jane instanceof Product); // true
// console.log(" message : "+ jane.name); // "Jane"
// Product.save();
//Create a product with Squelize ----------------------------
// (async () => {
//   const camera =  await Product.create({ name: 'Camera', price : 26.00, status : 'HOUSEHOLD_APPLIANCES'});
// // Jane exists in the database now!
// console.log(camera instanceof Product); // true
// console.log(camera.toJSON()); // "Jane"
// })();
//Update a product with Squelize ----------------------------
// (async ()=> {
//   const jane = await Product.create({ name: 'Read Dead Redemption 2', price : 12.00, status:'GAMES'});
// jane.set({
//   name: 'Ada',
//   price: 13.00,
// });
// //await jane.reload(); //from database before save()
// // As above, the database still has "Jane"
// await jane.save();
// // The database now has "Ada" and 13.00 for name and favorite color
// })();
//Delete a product with Squelize ----------------------------
// (async ()=> {
//   const achraf = await Product.create({ name: 'Achraf', price : 0.00, status:'FASHION' });
// console.log(achraf.name); // "Achraf"
// await achraf.destroy();
// // Now this entry was removed from the database
// })();
//Select all product -----------------------------
// Find all products
// (async ()=> {
//   const products = await Product.findAll();
//   console.log(products.every((product : any) => product instanceof Product)); // true
//   console.log('All products:', JSON.stringify(products, null, 2));
// })();
//Select all product with specifics attributes -----------------------------
// (async ()=> {
//   const products = await Product.findAll({attributes : ['name', 'price', ['status', 'type']]});
//  console.log(products.every((product : any) => product instanceof Product)); // true
// console.log('All products:', JSON.stringify(products, null, 2));
// console.log("Total : " + await Product.sum('price')); // 55
// })();
//GET home=========================================================
app.get("/", (req, resp) => {
    resp.send("<h1>Pratique à la connexion de la base de donnée mysql</h1>");
});
/**Customers------------------------------------------------------------- */
//GET customers-page=========================================================
app.get("/customers-page", (req, resp) => {
    let responseHtml = "";
    responseHtml += `<h1>Customers : </h1>`;
    con.query("SELECT * FROM customer", function (err, result, fields) {
        if (err)
            throw err;
        console.log(result);
        //Faire la boucle d'affichage
        result.forEach((element, index) => {
            //console.log(index);
            responseHtml += `<h2>Customer #${index + 1} : </h2>`;
            responseHtml += `<ul>`;
            responseHtml += `<li><b>Name :</b> ${element.name}</li>`;
            responseHtml += `<li><b>LastName :</b> ${element.lastName}</li>`;
            responseHtml += `<li><b>Name :</b> <b>Phone:</b> ${element.phone}</li>`;
            responseHtml += `</ul>`;
        });
        resp.send(responseHtml);
    });
});
//GET  customers-json=========================================================
app.get("/customers", (req, resp) => {
    con.query("SELECT * FROM customer", function (err, result, fields) {
        if (err)
            throw err;
        //console.log(result);
        //Faire la boucle d'affichage
        result.forEach((element, index) => {
            //console.log(index);
            //responseHtml += `${element}`;
        });
        resp.send(result);
    });
});
//GET  customer by id =========================================================
app.get("/customers/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    var sql = "SELECT * FROM customer where CustomerID = ?";
    var value = [id];
    con.query(sql, value, function (err, result, fields) {
        if (err) {
            resp.status(500).send(err);
        }
        //console.log(result);
        resp.send(result);
    });
});
//POST new-customer =========================================================
app.post("/new-customer", (req, resp) => {
    const { name, lastName, address, phone, username, password } = req.body;
    //resp.send(req.body);
    var sql = "INSERT INTO customer (name, lastName, phone, username, password, address) VALUES (?, ?, ?, ?, ?, ?) ";
    var values = [
        name,
        lastName,
        phone,
        username,
        password,
        address
    ];
    con.query(sql, values, function (err, result) {
        if (err) {
            resp.status(500).send(err);
        }
        console.log("Number of record inserted is " + result.affectedRows);
        resp.status(201).send(result);
    });
});
//PUT user by id  =========================================================
app.put("/edit-user/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    const { name, lastName, address, phone, username, password } = req.body;
    //console.log("REq body => " + req.body);
    var values = [
        name,
        lastName,
        phone,
        username,
        password,
        address,
        id
    ];
    con.connect(function (err) {
        // if (err) throw err;
        var sql = "UPDATE customer SET name = ?, lastName = ?, phone = ?, username = ?, password = ?, address = ?  WHERE CustomerID = ?";
        con.query(sql, values, function (err, result) {
            if (err) {
                resp.status(500).send({ error: err.message });
            }
            console.log(result.affectedRows + " record(s) updated");
            resp.status(201).send({ message: result.message });
        });
    });
});
//DELETE user by id  =========================================================
app.delete("/delete-user/:id", (req, resp) => {
    const id = parseInt(req.params.id);
    var sql = "DELETE FROM customer WHERE CustomerID = ?";
    con.query(sql, id, (err, result) => {
        if (err) {
            resp.status(500).send(err);
        }
        console.log("Number of records deleted: " + result.affectedRows);
        resp.status(200).send(result);
    });
});
/**Product------------------------------------------------------------- */
//GET all products=========================================
app.get("/products", (req, resp) => {
    (async () => {
        const products = await product_model_1.default.findAll({ attributes: ['name', 'price', ['status', 'type'], 'photo', 'ProductID'], });
        //console.log(products.every((product : any) => product instanceof Product)); // true
        resp.json(products.map(product => product.toJSON()));
        //console.log('All products:', JSON.stringify(products, null, 2));
    })();
});
//GET productByID=====================================
app.get("/products/:id", (req, resp) => {
    const id = req.params.id;
    console.log(id);
    (async () => {
        const product = await product_model_1.default.findByPk(id, { attributes: ['name', 'price', ['status', 'type'], 'photo', 'ProductID'] });
        if (product === null) {
            resp.status(404).send("<h1>Not Found</h1>");
        }
        else {
            resp.json(product.toJSON());
            // Its primary key is 123
        }
    })();
});
//Create product==================================
app.post("/product", async (req, resp) => {
    //Déclaration de variables------------------------------------------------
    let { name, price, status, photo } = req.body;
    let type = photo.split(',')[0].split(';')[0].split(':')[1];
    let base64String = photo.split(',')[1];
    //Test to show the receiving json-----------------------------------------
    //console.log(req.body);
    //resp.send(req.body);
    //console.log("type received =>  " + type);
    //console.log("\nbase64String received => :" + base64String.substring(0, 20));
    let photoConvertToBLOB = (0, blob_util_1.base64StringToBlob)(base64String, type);
    //console.log("La photo en BLOB : " + photo);  //{}
    //photo = null;
    //---------------------------------------------------------------------------
    //To convert to an array which JSON can handle ----------------------------:
    let photoBLOBConvertTOArrayBUFFER = await photoConvertToBLOB.arrayBuffer();
    let photoArray = Array.from(new Uint8Array(photoBLOBConvertTOArrayBUFFER));
    let photobinaryData = Buffer.from(photoArray); //On the receiving side (e.g. with Node.js) decode it like so :
    //---------------------------------------------------------------------------
    //Send to the databse--------------------------------------------------------
    (async () => {
        try {
            const product = await product_model_1.default.create({ name: name, price: price, status: status, photo: photobinaryData });
            //console.log(product instanceof Product); // true
            console.log("Result : "); // true
            console.log(product.toJSON()); // "Jane"
            resp.send(product.toJSON());
        }
        catch (err) {
            resp.status(500).json(err.message);
        }
    })();
});
//Update product=================================
app.put("/product/:id", async (req, resp) => {
    const id = req.params.id;
    let { name, price, status, photo } = req.body;
    //Test---------------------------------------------------
    //console.log("photo received => " + photo.substring(0, 11)); //data:image/
    //Si photo commence par :data:image/png;base64 alors il y'a un nouvelle photo modifié
    if (photo.substring(0, 11) == "data:image/") {
        console.log("La photo a été modifié");
        //Convert photo base64 to blob------------------------
        let base64String = photo.split(',')[1];
        let type = photo.split(',')[0].split(';')[0].split(':')[1];
        let photoConvertToBLOB = (0, blob_util_1.base64StringToBlob)(base64String, type);
        //To convert to an array which JSON can handle binaryDate in the database ----------------------------:
        let photoBLOBConvertTOArrayBUFFER = await photoConvertToBLOB.arrayBuffer();
        let photoArray = Array.from(new Uint8Array(photoBLOBConvertTOArrayBUFFER));
        let photobinaryData = Buffer.from(photoArray); //On the receiving side (e.g. with Node.js) decode it like so :
        photo = photobinaryData;
        //---------------------------------------------------------------------------
    }
    else {
        console.log("La photo n'a pas été modifié");
        //Convert photo base64 to blob------------------------
        let photoConvertToBLOB = (0, blob_util_1.base64StringToBlob)(photo);
        //To convert to an array which JSON can handle binaryDate in the database ----------------------------:
        let photoBLOBConvertTOArrayBUFFER = await photoConvertToBLOB.arrayBuffer();
        let photoArray = Array.from(new Uint8Array(photoBLOBConvertTOArrayBUFFER));
        let photobinaryData = Buffer.from(photoArray); //On the receiving side (e.g. with Node.js) decode it like so 
        photo = photobinaryData;
    }
    console.log(id);
    //resp.send(req.body);
    (async () => {
        try {
            const product = await product_model_1.default.findByPk(id);
            if (product == null)
                resp.status(404).json({ message: "Product not found !" });
            else {
                product === null || product === void 0 ? void 0 : product.set({
                    name,
                    price,
                    photo,
                    status
                });
                await (product === null || product === void 0 ? void 0 : product.save());
                resp.status(201).json(product);
            }
            // // As above, the database still has "Jane"
        }
        catch (err) {
            resp.status(500).json(err.message);
        }
    })();
});
//Delete product================================
app.delete("/product/:id", (req, resp) => {
    const id = req.params.id;
    console.log(id);
    (async () => {
        try {
            const product = await product_model_1.default.findByPk(id);
            if (product == null)
                resp.status(404).json({ message: "Product not found !" });
            else {
                await (product === null || product === void 0 ? void 0 : product.destroy());
                resp.status(202).json(product);
            }
        }
        catch (err) {
            resp.status(500).json(err.message);
        }
    })();
});
app.listen(8085, () => {
    console.log("Server started...");
});
