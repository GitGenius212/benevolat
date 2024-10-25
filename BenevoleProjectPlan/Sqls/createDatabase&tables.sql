CREATE DATABASE benevolatDB;

USE benevolatDB;

CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    price FLOAT(2) NOT NULL,
	photo BLOB, 
	status SET('ELECTRONICS', 'FASHION', 'FOOD', 'HOME', 'HOBBIES', 'HEALTH_BEAUTY', 'AUTOMOTIVE', 'BOOKS_MEDIA', 'HOUSEHOLD_APPLIANCES', 'GAMES') NOT NULL, 
    PRIMARY KEY (ProductID)
	
);



CREATE TABLE Address (
    AddressID INT AUTO_INCREMENT,
    appartment VARCHAR(255),
    municipalNumber VARCHAR(255) NOT NULL,
	street VARCHAR(255) NOT NULL,  
	city VARCHAR(255) NOT NULL, 
	state_address VARCHAR(255), 
	zipCode VARCHAR(255) NOT NULL, 
	country CHAR(2) NOT NULL, 
	PRIMARY KEY (AddressID)
 
);

CREATE TABLE Customer (
    CustomerID INT AUTO_INCREMENT,
    name TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
	id_address INT, 
	PRIMARY KEY (CustomerID), 
	FOREIGN KEY (id_address) REFERENCES Address(AddressID) 
 
);



CREATE TABLE `ORDER` (
    OrderID INT AUTO_INCREMENT,
    num INT NOT NULL,
	id_customer INT NOT NULL, 
	status SET('CREATE', 'SHIPPING', 'DELIVERED', 'PAID') NOT NULL,
	PRIMARY KEY (OrderID), 
	FOREIGN KEY (id_customer) REFERENCES Customer(CustomerID)
	
);


CREATE TABLE OrderDetail (
    quantity INT NOT NULL,
    id_order INT NOT NULL,
	id_product INT NOT NULL, 
	PRIMARY KEY(id_product, id_order), 
    FOREIGN KEY (id_order) REFERENCES `ORDER`(OrderID), 
	FOREIGN KEY (id_product) REFERENCES Product(ProductID)
 
);


