DROP TABLE IF EXISTS products;

CREATE TABLE products(
    product_ID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    price INT NOT NULL,
    PRIMARY KEY (product_ID)
);

SELECT * FROM products;

DROP TABLE IF EXISTS shoppers;

CREATE TABLE shoppers(
    shopper_ID INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    nrOfItems INT NOT NULL,
    PRIMARY KEY (shopper_ID)
);

SELECT * FROM shoppers;
