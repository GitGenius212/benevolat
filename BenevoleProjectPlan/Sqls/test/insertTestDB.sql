USE test;


INSERT INTO Customer (name, lastName, phone, username, password, address)
VALUES ('Cardinal', 'Tom B. Erichsen', "514-986-4785", 'Stavanger', '4006', 'Skagen 21');


INSERT INTO Customer (name, lastName, phone, username, password, address)
VALUES ('Louragli', 'Ismael', "514-815-4346", 'ismael', 'ImFine', 'Martil 5245');


INSERT INTO Customer (name, lastName, phone, username, password, address)
VALUES ('Oyoyi', 'Jibril', "354-896-124", 'jibril', 'Alahouakbar', 'Martil 9865');

INSERT INTO Product (name, price , photo, status) 
VALUES ('Scent TomFord',25.00, LOAD_FILE('C:/Users/hp/Documents/pratique&projectsInformatique/nodeJs/connectMySQL/images/th.jpg'),  'HEALTH_BEAUTY');


INSERT INTO Product (name, price , photo, status) 
VALUES ('Beverage',13.00, LOAD_FILE('C:/Users/hp/Documents/pratique&projectsInformatique/nodeJs/connectMySQL/images/nestea.jpg'),  'FOOD');


INSERT INTO Product (name, price , photo, status) 
VALUES ('Pica Ftasty',12.00, LOAD_FILE('C:/Users/hp/Documents/pratique&projectsInformatique/nodeJs/connectMySQL/images/chocolate.jpg'),  'FOOD');


INSERT INTO Product (name, price , photo, status) 
VALUES ('sharpener',40.00, LOAD_FILE('C:/Users/hp/Documents/pratique&projectsInformatique/nodeJs/connectMySQL/images/sharpener.jpg'),  'HOUSEHOLD_APPLIANCES');


