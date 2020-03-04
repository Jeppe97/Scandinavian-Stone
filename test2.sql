DROP TABLE IF EXISTS carsTest;

CREATE TABLE carsTest (
    carNumber INT NOT NULL AUTO_INCREMENT,
    Brand VARCHAR(30),
    Model VARCHAR(35),
    Color VARCHAR(35),
    PricePerDay INT,
    PRIMARY KEY(carNumber)
);

INSERT INTO carsTest(Brand, Model, Color, PricePerDay)
VALUES('toyota', '123', 'Black', 800),
       ('volvo', '1', 'white', 200),
       ('SAAB','X', 'Black', 400),
       ('toyota', '123', 'Green', 800),
       ('volvo', 'X', 'White', 200),
       ('SAAB','X', 'Green', 400),
       ('BMW', '123', 'Red', 1800),
       ('Tesla', '456', 'Yellow', 300),
       ('SAAB','1', 'Green', 1800);

SELECT * FROM carsTest;

DROP TABLE IF EXISTS customerTest;

CREATE TABLE customerTest(
    CustomerNumber INT AUTO_INCREMENT,
    Name VARCHAR(50),
    PRIMARY KEY (CustomerNumber)
);

INSERT INTO customerTest(Name)
VALUES('Sarah'),
       ('Karin'),
       ('Bringemo'),
       ('Lisa'),
       ('Ella'),
       ('Ylva');

SELECT * FROM customerTest;

DROP TABLE IF EXISTS bookingsTest;

CREATE TABLE bookingsTest (
    CustomerNumber INT,
    CarNumber INT,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerNumber) REFERENCES customerTest(CustomerNumber),
    FOREIGN KEY (CarNumber) REFERENCES carsTest(CarNumber)
);

INSERT INTO bookingsTest(CustomerNumber, CarNumber, StartDate, EndDate) VALUES
    (3,3,'2019-02-18', '2019-03-05'),
    (4,4,'2019-03-18', '2019-03-20'),
    (5,1,'2019-04-10', '2019-04-20'),
    (6,2,'2019-04-04', '2019-04-06'),
    (1,5,'2019-05-12', '2019-05-19');

SELECT * FROM bookingsTest;