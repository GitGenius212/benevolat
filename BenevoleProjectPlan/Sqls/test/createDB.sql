-- CREATE DATABASE testDB;

USE test;



CREATE TABLE Customer (
    CustomerID INT AUTO_INCREMENT,
    name TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
	address TEXT NOT NULL, 
	PRIMARY KEY (CustomerID) 
 
);


CREATE TABLE Product (
    ProductID INT AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    price FLOAT(2) NOT NULL,
	photo LONGBLOB, 
	status SET('ELECTRONICS', 'FASHION', 'FOOD', 'HOME', 'HOBBIES', 'HEALTH_BEAUTY', 'AUTOMOTIVE', 'BOOKS_MEDIA', 'HOUSEHOLD_APPLIANCES', 'GAMES') NOT NULL, 
    PRIMARY KEY (ProductID)
	
);



