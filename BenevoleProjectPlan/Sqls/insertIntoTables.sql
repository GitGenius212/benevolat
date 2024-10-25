USE benevolatDB;

-- Insertion de données dans la table Product
INSERT INTO Product (name, price, status) VALUES
('Smartphone', 499.99, 'ELECTRONICS'),
('T-shirt', 19.99, 'FASHION'),
('Organic Apples', 4.99, 'FOOD'),
('Sofa', 299.99, 'HOME'),
('Mountain Bike', 249.99, 'HOBBIES'),
('Vitamin C Supplement', 12.99, 'HEALTH_BEAUTY'),
('Car Wax', 14.99, 'AUTOMOTIVE'),
('Novel', 9.99, 'BOOKS_MEDIA'),
('Microwave', 89.99, 'HOUSEHOLD_APPLIANCES'),
('Board Game', 24.99, 'GAMES');

-- Insertion de données dans la table Address
INSERT INTO Address (appartment, municipalNumber, street, city, state_address, zipCode, country) VALUES
('101', '123', 'Maple Street', 'Toronto', 'Ontario', 'M5A 1A1', 'CA'),
('502', '456', 'Elm Avenue', 'Vancouver', 'British Columbia', 'V5K 0A1', 'CA'),
(NULL, '789', 'Pine Boulevard', 'Montreal', 'Quebec', 'H2X 3J5', 'CA'),
('201', '321', 'Oak Lane', 'Calgary', 'Alberta', 'T2P 1J9', 'CA'),
(NULL, '654', 'Cedar Road', 'Ottawa', 'Ontario', 'K1A 0B1', 'CA');

-- Insertion de données dans la table Customer
INSERT INTO Customer (name, lastName, phone, username, password, id_address) VALUES
('John', 'Doe', '555-1234', 'johndoe', 'password123', 1),
('Jane', 'Smith', '555-5678', 'janesmith', 'mypassword', 2),
('Alice', 'Johnson', '555-8765', 'alicej', 'securepass', 3),
('Bob', 'Brown', '555-4321', 'bobb', 'password!', 4),
('Eve', 'White', '555-9876', 'evewhite', 'password99', 5);

-- Insertion de données dans la table ORDER
INSERT INTO `ORDER` (num, id_customer, status) VALUES
(1001, 1, 'CREATE'),
(1002, 2, 'SHIPPING'),
(1003, 3, 'DELIVERED'),
(1004, 4, 'PAID'),
(1005, 5, 'CREATE');

-- Insertion de données dans la table OrderDetail
INSERT INTO OrderDetail (quantity, id_order, id_product) VALUES
(2, 1, 1),
(1, 1, 2),
(5, 2, 3),
(1, 3, 4),
(3, 4, 5),
(2, 5, 6),
(1, 5, 7),
(4, 3, 8),
(1, 2, 9),
(2, 4, 10);


